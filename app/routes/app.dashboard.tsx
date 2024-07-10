import type { MetaFunction } from '@remix-run/cloudflare'

import friendsSrc from '~/assets/friends.svg'
import eigenPointsSrc from '~/assets/eigen-points.svg'
import primeTokenSrc from '~/assets/prime-eth-token-full.svg'
import novumTokenSrc from '~/assets/novETH_token.svg'
import primePointsSrc from '~/assets/prime-points.svg'
import novumPointsSrc from '~/assets/novum_points.svg'

import { formatEth, formatPercentage, formatPoints } from '~/utils/bigint'
import { CopyReferrerLink } from '~/components/CopyReferrerLink'

import { Link } from '@remix-run/react'
import { Tooltip } from '~/components/Tooltip'
import { useUserStats } from '~/utils/useUserStats'

export const meta: MetaFunction = () => {
  return [
    { title: 'Novum Finance' },
    { name: 'description', content: 'Welcome to Novum Finance!' },
  ]
}

export default function Index() {
  const {
    isLoading,
    assetBalance,
    userPoint,
    userReferralPoint,
    percentTotalXp,
    percentTotalELPoints,
    userElPoint,
  } = useUserStats()

  const formatDashboardPoints = (val?: bigint | string | undefined) =>
    val ? formatPoints(val) : isLoading ? '...' : '-'

  const headerClass = `font-medium text-center mt-4 text-xl leading-relaxed mb-2`
  const boxClass = `rounded-3xl border border-gray-border bg-white flex gap-2 flex-col md:flex-row justify-between items-center py-4 px-8`

  return (
    <>
      <div className="flex flex-col gap-4 w-full max-w-[700px]">
        <div className={headerClass}>Your Balance</div>
        <div className={boxClass}>
          <div className="sm:w-1/4 flex justify-center">
            <img className="h-16 rounded-full" src={novumTokenSrc} alt="Novum ETH" />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-2 items-center py-6 md:pt-2 md:pb-1">
            <div className="text-gray-500 text-center text-sm font-medium leading-relaxed flex items-center gap-2">
              novETH
              <Tooltip size={16} className="p-2 text-xs" placement="right">
                Total Amount of novETH in your wallet.
              </Tooltip>
            </div>
            <div className="text-2xl font-medium align-middle leading-relaxed">
              {formatEth(assetBalance)}
            </div>
          </div>
          <div className="sm:w-1/4 flex justify-center">
            <Link to="/app/restake" className="btn text-sm px-6 py-3">
              Restake {assetBalance === 0n ? 'now' : 'more'}
            </Link>
          </div>
        </div>
        <div className={headerClass}>Your Rewards</div>
        <div className={`${boxClass} mb-2`}>
          <div className="sm:w-1/4 flex justify-center">
            <img className="h-16 rounded-full" src={novumPointsSrc} alt="Novum ETH Points" />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-3 items-center py-6 md:pt-2 md:pb-2">
            <div className="text-gray-500 text-center text-sm font-medium flex items-center gap-2">
              Novum Points
              <Tooltip size={16} className="p-2 text-xs" placement="right">
                Total amount of Novum Points distributed by Novum. Novum Points are points earned through restaking.
              </Tooltip>
            </div>
            <div className="text-2xl font-medium">
              {formatDashboardPoints(userPoint + userReferralPoint)}
            </div>
          </div>
          <div className="sm:w-1/4 flex justify-center flex-col gap-3 items-center">
            <div className="text-gray-500 text-center text-sm font-medium">
              % of total
            </div>
            <div className="text-2xl font-medium">
              {percentTotalXp ? formatPercentage(percentTotalXp, 3) : '-'}
            </div>
          </div>
        </div>
        <div className={boxClass}>
          <div className="sm:w-1/4 flex justify-center">
            <img className="h-16" src={eigenPointsSrc} alt="Eigen Points" />
          </div>
          <div className="sm:w-1/2 flex flex-col gap-3 items-center py-6 md:pt-2 md:pb-2">
            <div className="text-gray-500 text-center text-sm font-medium flex items-center gap-2">
              EigenLayer Points
              <Tooltip size={16} className="p-2 text-xs" placement="right">
                Total amount of Eigenlayer points.
              </Tooltip>
            </div>
            <div className="text-2xl font-medium ">
              {formatDashboardPoints(userElPoint)}
            </div>
          </div>
          <div className="sm:w-1/4 flex justify-center flex-col gap-3 items-center">
            <div className="text-gray-500 text-center text-sm font-medium">
              % of total
            </div>
            <div className="text-2xl font-medium">
              {percentTotalELPoints
                ? formatPercentage(percentTotalELPoints, 3)
                : '-'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
