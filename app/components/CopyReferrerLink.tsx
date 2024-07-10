import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { TooltipToast } from './Tooltip'
import { hexToBase62 } from '~/utils/base62'

export const CopyReferrerLink = ({
  className = 'btn-outline text-sm py-3 px-4',
}: {
  className?: string
}) => {
  const { isConnected, address } = useAccount()
  const { openConnectModal } = useConnectModal()
  const [urlOrigin, setUrlOrigin] = useState('')

  
  const copyToClipboard = (text: any) => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea')
    textarea.value = text;

    // Make the textarea invisible
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'

    // Append the textarea to the DOM
    document.body.appendChild(textarea)

    // Select and copy the text
    textarea.select()
    document.execCommand('copy')

    // Clean up
    document.body.removeChild(textarea)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    setUrlOrigin(window.location.origin)
  }, [])

  const referralLink = address
    ? `${urlOrigin}/app/restake?r=${hexToBase62(address)}`
    : ''

  if (!isConnected) {
    return (
      <button className={className} onClick={() => openConnectModal?.()}>
        Connect Wallet
      </button>
    )
  }

  return (
    <TooltipToast
      text="Link copied!"
      placement="bottom"
      className="p-2 text-xs"
    >
      <button
        className={className}
        onClick={async () => {
          try {
            copyToClipboard(referralLink)
          } catch (err) {
            console.error('Failed to copy text: ', err)
          }
        }}
      >
        Copy Referral Link
      </button>
    </TooltipToast>
  )
}
