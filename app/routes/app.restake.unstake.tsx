import { useState, useEffect } from 'react'
import { useTime } from 'react-time-sync'
import {
  useAccount,
  useReadContracts,
  useWriteContract,
  useWaitForTransactionReceipt,
  useWalletClient,
  useBalance,
  useChains,
} from 'wagmi'
import { parseEther, parseAbi, formatEther } from 'viem'
import { useConnectModal } from '@rainbow-me/rainbowkit'

import { bigintToFloat, formatEth } from '~/utils/bigint'
import {
  contracts,
  unstakableAssets,
  lrtOraclePriceMethod,
  Asset,
} from '~/utils/constants'
import { CaretDown } from '~/components/Icons'
import { Modal } from '~/components/Modal'
import { TokenChooser } from '~/components/TokenChooser'
import { Tags } from '~/components/Tags'
import { getReferrerId } from '~/utils/useReferrerTracker'

import warnLogo from `~/assets/warn.svg`

import {
  lrtOracleAbi,
  novETHABI,
  lrtDepositPoolAbi,
  lrtConfigAbi,
  lrtWithdrawalManagerAbi,
} from '~/utils/abis'

export default function Index() {
  const { openConnectModal } = useConnectModal()
  const [isOpen, setIsOpen] = useState(false)
  const [tokenChooserIsOpen, setTokenChooserIsOpen] = useState(false)

  const [approves, setApproves] = useState([])
  const contractWrite = useWriteContract()
  const walletClient = useWalletClient()
  const { isConnected, address } = useAccount()

  const [asset, setAsset] = useState<keyof typeof contracts>(unstakableAssets[0].symbol)
  const activeAsset = unstakableAssets.find((a) => a.symbol === asset) as Asset
  const [unstakeAmount, setUnstakeAmount] = useState('')
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
        abi: lrtDepositPoolAbi,
        address: contracts.lrtDepositPool,
        functionName: 'getTotalAssetDeposits',
        args: [contracts[asset]],
      },
    ],
  })

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

  let novETHPrice = 0n
  let lrtBalance = 0n
  let rawAssetPrice = 0n
  let novAllowance = 0n
  let assetBalance = 0n
  let assetPrice = 0n
  let unstakeAmountBI = 0n
  let youWillGet = 0n
  let assetDeposited = 0n

  if (data) {
    try {
      novETHPrice = data[0]?.result || 10n ** 18n
      // if contract not connected balance is 0
      lrtBalance = data[1].result
      rawAssetPrice = data[2].result || 10n ** 18n
      novAllowance = isConnected ? data[3].result : 0n
      assetBalance = isConnected ? asset.toLowerCase() === 'ETH'.toLowerCase() ? ethBal.data?.value : (data[4].result ?? 0n ) : 0n
      assetDeposited = isConnected ? data[5].result : 0n
      assetPrice = (10n ** 18n * novETHPrice) / rawAssetPrice
    } catch (e) {
      /* Ignore */
    }
    try {
      // remove commas from input
      unstakeAmountBI = parseEther(unstakeAmount.replaceAll(',', ''))
      youWillGet = (novETHPrice * unstakeAmountBI) / rawAssetPrice
    } catch (e) {
      console.log(e)
      console.log(data)
      /* Ignore */
    }
  }

  const assetApprovedThisSession = approves.includes(`${address}:${asset}`)

  let unstakeBtnDisabled = false
  let approveBtnDisabled = true
  let stakeBtnText = 'Stake'
  let approveBtnText = `${asset} approved`
  // show approve button if we can stake and asset has been approved this session
  let approveBtnShow = assetApprovedThisSession
  if (!isConnected) {
    stakeBtnText = 'Connect wallet'
    approveBtnShow = false
  } else if (!unstakeAmountBI || unstakeAmountBI <= 0n) {
    stakeBtnText = 'Enter an amount'
    unstakeBtnDisabled = true
    approveBtnShow = false
  } else if (unstakeAmountBI > novAllowance) {
    stakeBtnText = `Unstake now`
    approveBtnText = `Approve novETH`
    unstakeBtnDisabled = true
    approveBtnDisabled = false
    approveBtnShow = true
  }

  const doUnstake = () => {
    if (unstakeBtnDisabled) {
      return
    }
    if (!isConnected) {
      openConnectModal?.()
    } else if (unstakeAmountBI <= novAllowance) {
      // reset unstake form
      setUnstakeAmount('')
      contractWrite.writeContract({
        abi: lrtWithdrawalManagerAbi,
        address: contracts.lrtWithdrawalManager,
        functionName: 'initiateWithdrawal',
        args: [
          contracts[asset],
          parseEther(unstakeAmount),
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
      modalButtonAction = doUnstake
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
          setUnstakeAmount('')
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

          <div className="mt-8 flex items-center text-sm text-gray-500 font-medium mb-3 leading-snug">
            Enter amount of novETH
          </div>

          <div className="relative">
            <input
              type="text"
              className="w-full border border-gray-border bg-white text-3xl font-medium pl-4 py-4 leading-relaxed rounded-2xl flex items-center gap-2"
              placeholder="0"
              value={unstakeAmount}
              onChange={(e) => setUnstakeAmount(e.currentTarget.value)}
            />
            <div className="absolute text-sm text-gray-500 right-4 top-0 bottom-0 flex flex-col items-end justify-center gap-1.5">
              <div className="flex items-center">
                Balance
                <button
                  onClick={() => {
                    if (lrtBalance) {
                      setUnstakeAmount(formatEther(lrtBalance))
                    }
                  }}
                  className="ml-2 border border-gray-500 px-2 text-xs rounded-full hover:bg-gray-500 hover:text-white"
                >
                  <span className="inline-block -translate-y-px">max</span>
                </button>
              </div>
              <div>{`${formatEth(lrtBalance)} novETH`}</div>
            </div>
          </div>
          <div className="flex justify-end items-center text-sm text-gray-500 mt-2 sm:hidden">
            {`Your novETH: ${formatEth(lrtBalance)}`}

            <button
              className="rounded-full border border-gray-border text-xs px-1.5 py-0.5 ml-3 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
              onClick={() => {
                walletClient?.data?.watchAsset({
                  type: 'ERC20',
                  options: {
                    address: contracts.novETH,
                    decimals: 18,
                    symbol: 'novETH',
                  },
                })
              }}
            >
              Add novETH
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 px-4 sm:py-6 sm:px-6  flex flex-col gap-4 border-b border-gray-border">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">You will receive:</div>
          <div className="flex items-center gap-1 font-medium">
            {formatEth(youWillGet || '0')}
            <img src={activeAsset.src} alt={asset} className="h-4 rounded-full" />
            {asset}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm flex items-center gap-1">
            Exchange Rate
            </div>
          <div className="text-sm">
            {`1 novETH = ${formatEth(assetPrice)} ${asset}`}
          </div>
        </div>
      </div>
      <div className="py-4 px-4 sm:py-6 sm:px-6 flex flex-col gap-6 border-b border-gray-border mb-[-1px]">
        {approveBtnShow && (
          <button
            className={`${
              approveBtnDisabled ? 'btn-disabled' : 'btn'
            } px-3 py-4 text-xl`}
            onClick={() => {
              if (approveBtnDisabled) {
                return
              }
              if (unstakeAmountBI > novAllowance) {
                contractWrite.writeContract({
                  abi: novETHABI,
                  address: contracts.novETH,
                  functionName: 'approve',
                  args: [contracts.lrtWithdrawalManager, unstakeAmountBI],
                })
                setApproves([...approves, `${address}:${contracts.novETH}`])
              }
            }}
          >
            {approveBtnText}
          </button>
        )}
        <button
          className={`${
            unstakeBtnDisabled ? 'btn-disabled' : 'btn'
          } px-3 py-4 text-xl`}
          onClick={() => doUnstake()}
        >
          {stakeBtnText}
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
