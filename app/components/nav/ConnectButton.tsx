import { useState, useRef, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useAccountModal, useConnectModal, useChainModal } from '@rainbow-me/rainbowkit'
import { useAccount, useDisconnect, useClient } from 'wagmi'
import { ProfileIcon } from '~/components/Icons'
import { contracts } from '~/utils/constants'
import { truncateAddress } from '~/utils/string'
import LogoutIcon from '~/assets/logout.svg'
import NovumToken from '~/assets/novETH_token.svg'

export const ConnectButton = () => {
  const { isConnected, address, chainId } = useAccount()
  const { openConnectModal } = useConnectModal()
  const { openAccountModal } = useAccountModal()
  const { openChainModal } = useChainModal()
  const client = useClient()
  const { disconnect } = useDisconnect()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [dropdownRef])

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  }

  const addNovEth = () => {
    // console.log('account: ', client?.account)
    window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: contracts.novETH, // The address that the token is at.
            symbol: 'novETH', // A ticker symbol or shorthand, up to 5 chars.
            decimals: 18, // The number of decimals in the token
            image: '', // A string url of the token logo
          },
        },
    })
  }
  return (
    <>
      {isConnected ? (
        chainId == '17000' ? 
        (
          <>
            {/* <button
              className="btn-secondary pl-1.5 pr-4 py-1.5 text-sm flex items-center gap-3 font-medium self-stretch text-gray-500"
              onClick={openAccountModal}
            >
              <div className="rounded-full overflow-hidden">
                <ProfileIcon />
              </div>
              <div>{truncateAddress(address)}</div>
            </button> */}
            <Dropdown show={isOpen} onToggle={handleDropdownToggle}>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className='btn-secondary pl-1.5 pr-4 py-1.5 text-sm flex items-center gap-3 font-medium self-stretch text-gray-500'>
                <div className="rounded-full overflow-hidden">
                  <ProfileIcon />
                </div>
                <div className='text-gray-500'>{truncateAddress(address)}</div>
              </Dropdown.Toggle>
              <Dropdown.Menu show={isOpen}  id="dropdown-basic" className='bg-white justify-right w-[250px] shadow-xl rounded-md p-2 self-stretch'>
                <Dropdown.Item
                  onClick={() => {
                    disconnect()
                  }}
                  className='justify-between align-center flex w-[100%] pl-2 pr-2 py-2'
                >
                  <img src={LogoutIcon} width="18px" height="18px" alt="" />
                  <button className='btn-red justify-right p-2'>Disconnect</button>
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    addNovEth()
                  }}
                  className='justify-between align-center flex w-[100%] pl-2 pr-2 py-2'
                >
                  <img src={NovumToken} width="24px" height="24px" alt="" />
                  <button className='btn p-2 justify-right'>Add novETH</button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <button
            className="btn-warning pl-4 pr-4 py-2 text-sm flex items-center gap-3 font-medium self-stretch text-black-500"
            onClick={openChainModal}
          >
            Wrong Network
          </button>
        )
      ) : (
        <button className="btn px-6 py-3" onClick={openConnectModal}>
          Connect
        </button>
      )}
    </>
  )
}
