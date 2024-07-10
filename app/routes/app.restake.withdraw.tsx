import { useState, useEffect } from 'react'
import { useTime } from 'react-time-sync'
import Web3 from 'web3'
import {
  useAccount,
  useReadContracts,
  useWriteContract,
  useWaitForTransactionReceipt,
  useWalletClient,
  useBalance,
  useChains,
  useBlockNumber,
} from 'wagmi'
import { parseEther, parseAbi, formatEther } from 'viem'
import { useConnectModal } from '@rainbow-me/rainbowkit'

import { bigintToFloat, formatEth } from '~/utils/bigint'
import {
  contracts,
  unstakableAssets,
  lrtOraclePriceMethod,
  Asset,
  HOLESKY_RPC_URL,
} from '~/utils/constants'
import { CaretDown } from '~/components/Icons'
import { Modal } from '~/components/Modal'
import { TokenChooser } from '~/components/TokenChooser'
import { Tags } from '~/components/Tags'

import warnLogo from `~/assets/warn.svg`

import {
  lrtOracleAbi,
  novETHABI,
  lrtWithdrawalManagerAbi,
} from '~/utils/abis'

export default function Index() {
  const { openConnectModal } = useConnectModal()
  const [isOpen, setIsOpen] = useState(false)
  const [tokenChooserIsOpen, setTokenChooserIsOpen] = useState(false)
  const [withdrawableAmount, setWithdrawableAmount] = useState(0)
  const [curwAmount, setCurWAmount] = useState(0)
  const contractWrite = useWriteContract()
  const { isConnected, address } = useAccount()
  const result = useBlockNumber()
  const [asset, setAsset] = useState<keyof typeof contracts>(unstakableAssets[0].symbol)
  const activeAsset = unstakableAssets.find((a) => a.symbol === asset) as Asset
  const connectedAddress =
    address || '0x1111111111111111111111111111111111111111'
  const { data, refetch } = useReadContracts({
    contracts: [
      {
        abi: parseAbi([
          `function ${lrtOraclePriceMethod}() view returns (uint256)`,
        ]),
        address: contracts.lrtOracle,
        functionName: lrtOraclePriceMethod,
      },
      {
        abi: novETHABI,
        address: contracts.novETH,
        functionName: 'balanceOf',
        args: [connectedAddress],
      },
      {
        abi: lrtOracleAbi,
        address: contracts.lrtOracle,
        functionName: 'getAssetPrice',
        args: [contracts[asset]],
      },
      {
        abi: novETHABI,
        address: contracts.novETH,
        functionName: 'allowance',
        args: [connectedAddress, contracts.lrtWithdrawalManager],
      },
      {
        abi: novETHABI,
        address: contracts[asset],
        functionName: 'balanceOf',
        args: [connectedAddress],
      },
      {
        abi: lrtWithdrawalManagerAbi,
        address: contracts.lrtWithdrawalManager,
        functionName: 'userAssociatedNonces',
        args: [contracts[asset], connectedAddress],
      },
      {
        abi: lrtWithdrawalManagerAbi,
        address: contracts.lrtWithdrawalManager,
        functionName: 'withdrawalDelayBlocks',
        args: [],
      },
    ],
  })
  const web3 = new Web3(HOLESKY_RPC_URL)
  const lrtWManagerInstance = new web3.eth.Contract(lrtWithdrawalManagerAbi, contracts.lrtWithdrawalManager)
  const ethBal = useBalance({address: connectedAddress})

  const txReceipt = useWaitForTransactionReceipt({ hash: contractWrite.data })

  /* refetch data on any transaction succeeding. Important to refresh data
   * and to enable Stake button (Modal or in-page) after approve succeeds.
   */
  useEffect(() => {
    if (contractWrite.status === 'success' && txReceipt.data) {
      refetch()
      /* It can happen that a wallet provider (say Metamask) will already
       * see a transaction processed and approval updated on a contract
       * while another provider (e.g. Infura) will still not have seen the
       * latest data. As a workaround to 2 more re-fetches 3 & 10 seconds later.
       */
      setTimeout(refetch, 3000)
      setTimeout(refetch, 10000)
    }
  }, [contractWrite.status, txReceipt.data, refetch])

  useEffect(() => {
    if (contractWrite.status === 'pending') {
      setIsOpen(true)
    }
  }, [contractWrite.status, txReceipt.data, refetch])

  useEffect(() => {
    const fetchData = async () => {
      if (data && isConnected) {
        try {
          let userAssociatedNonces = isConnected ? data[5].result : []
          let withdrawalDelayBlocks = isConnected ? data[6].result : 0n
          let curBlockNum = parseInt(result?.data)

          if (userAssociatedNonces.length > 0) {
            let begin = parseInt(userAssociatedNonces[0])
            let end = parseInt(userAssociatedNonces[1])
            if (end - begin - 1 >= 0) {
              let amount = 0
              for (let i = 0; i < end - begin; i++) {
                const withdrawData = await lrtWManagerInstance.methods
                  .getUserWithdrawalRequest(contracts[asset], connectedAddress, i)
                  .call()
                const curStartBlock = withdrawData?.withdrawalStartBlock
                if (curBlockNum >= parseInt(curStartBlock) + parseInt(withdrawalDelayBlocks)) {
                  amount += bigintToFloat(withdrawData?.expectedAssetAmount)
                  if(i == 0)
                    setCurWAmount(amount)
                    console.log('CurWAmount: ', curwAmount)
                }
              }
              console.log('amount: ', amount)
              setWithdrawableAmount(amount)
            }
          }
        } catch (e) {
          console.log(e)
        }
      }
    };
    fetchData()
  }, [data, isConnected, asset, ethBal.data, result, lrtWManagerInstance])

  let withdrawBtnDisabled = true
  let withdrawBtnText = 'Withdraw'
  // show approve button if we can stake and asset has been approved this session
  if (!isConnected) {
    withdrawBtnText = 'Connect wallet'
    withdrawBtnDisabled = false

  } else if (withdrawableAmount > 0) {
    withdrawBtnText = 'Withdraw'
    withdrawBtnDisabled = false
  }

  const doWithdraw = () => {
    if (withdrawBtnDisabled) {
      return
    }
    if (!isConnected) {
      openConnectModal?.()
    } else if (withdrawableAmount > 0) {
      contractWrite.writeContract({
        abi: lrtWithdrawalManagerAbi,
        address: contracts.lrtWithdrawalManager,
        functionName: 'completeWithdrawal',
        args: [
          contracts[asset]
        ],
      })
    }
  }

  let modalTitle = 'Transaction in process'
  let modalStatus = 'loading'
  let modalDescription
  let modalButtonText
  let modalButtonHref
  let modalButtonAction
  // button not disabled except if action is unstake and unstake is disabled
  const modalButtonDisabled = modalButtonAction ? unstakeBtnDisabled : false
  if (contractWrite.status === 'pending') {
    modalTitle = 'Please check your wallet'
  } else if (contractWrite.status === 'success' && txReceipt.data) {
    modalTitle = 'Transaction successful'
    if (contractWrite.variables.functionName == 'approve') {
      modalButtonText = 'Unstake'
      modalButtonHref = null
      modalButtonAction = doWithdraw
    }
    else {
      modalButtonText = 'View Dashboard'
      modalButtonHref = '/app/dashboard'
      modalButtonAction = null
    }
    modalStatus = 'success'
  } else if (contractWrite.error) {
    modalTitle = 'Transaction failed'
    modalStatus = 'error'

    modalDescription =
      contractWrite.error.shortMessage || contractWrite.error.message
  }

  return (
    <>
      <Modal
        status={modalStatus}
        description={modalDescription}
        txLink={
          contractWrite.data
            ? `https://holesky.etherscan.io/tx/${contractWrite.data}`
            : ''
        }
        title={modalTitle}
        buttonText={modalButtonText}
        buttonHref={modalButtonHref}
        isOpen={isOpen}
        setIsOpen={() => {
          setIsOpen(false)
          refetch()
        }}
        modalButtonAction={modalButtonAction}
        modalButtonDisabled={modalButtonDisabled}
      />
      <TokenChooser
        isOpen={tokenChooserIsOpen}
        onChange={(newAsset) => {
          setAsset(newAsset)
        }}
        setIsOpen={() => setTokenChooserIsOpen(false)}
        assets={unstakableAssets}
      />
      <div className="py-4 px-4 sm:py-6 sm:px-6 border-b border-gray-border">
        <div className="" >
          <div className="text-sm text-gray-500 font-medium mb-4 leading-snug">
          Withdraw novETH as
          </div>
          <button
            className="w-full border border-gray-border bg-white hover:bg-off-white text-1.5xl font-medium pl-4 pr-3 py-2.5 rounded-2xl flex items-center gap-2"
            onClick={() => setTokenChooserIsOpen(true)}
          >
            <img
              src={activeAsset.src}
              alt={asset}
              className="w-[34px] h-[34px]"
            />
            {asset}
            <div className="ml-auto">
              <Tags tags={activeAsset.tags} />
            </div>
            <div className="ml-1 border border-gray-border text-gray-500 bg-gray-bg1 rounded-full w-[34px] h-[34px] flex items-center justify-center">
              <CaretDown />
            </div>
          </button>
        </div>
      </div>
      <div className="py-4 px-4 sm:py-6 sm:px-6  flex flex-col gap-4 border-b border-gray-border">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">Total available:</div>
          <div className="flex items-center gap-1 font-medium">
            {withdrawableAmount}
            <img src={activeAsset.src} alt={asset} className="h-4 rounded-full" />
            {asset}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">You will receive:</div>
          <div className="flex items-center gap-1 font-medium">
            {curwAmount}
            <img src={activeAsset.src} alt={asset} className="h-4 rounded-full" />
            {asset}
          </div>
        </div>
      </div>
      <div className="py-4 px-4 sm:py-6 sm:px-6 flex flex-col gap-6 border-b border-gray-border mb-[-1px]">
        <button
          className={`${
            withdrawBtnDisabled ? 'btn-disabled' : 'btn'
          } px-3 py-4 text-xl`}
          onClick={() => doWithdraw()}
        >
          {withdrawBtnText}
        </button>
      </div>
      
      <div className="p-6 bg-yellow-500 rounded-2xl flex flex-col gap-2 m-2">
        <div className="flex items-center justify-between text-sm">
          <img
            src={warnLogo}
            alt="warn"
            className="w-[34px] h-[34px] mr-2"
          />
          <div>Unstake requests are processed in 7-10 days, subject to exit queue on Ethereum network and delays imposed by EigenLayer. Click the Unstake tab and select the asset and amount you want to convert your novETH. Use the withdraw button, once available, to withdraw your assets. Read our docs if you need more guidance</div>
        </div>
      </div>
       
    </>
  )
}
