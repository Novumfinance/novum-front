import { useAccount, useReadContracts } from 'wagmi'
import { useQuery } from '@tanstack/react-query'

import { contracts } from '~/utils/constants'
import { novETHABI } from '~/utils/abis'
import { graphqlClient } from '~/utils/graphql'
import { hexToBase62 } from '~/utils/base62'

export const POINT_MULTIPLIER = 10000n;

export function useUserStats() {
  const { address } = useAccount()

  const connectedAddress =
    address || '0x1111111111111111111111111111111111111111'

  const { data: novEthData } = useReadContracts({
    contracts: [
      {
        abi: novETHABI,
        address: contracts.novETH,
        functionName: 'balanceOf',
        args: [connectedAddress],
      },
    ],
  })

  const userStats = useQuery({
    queryKey: [`dashboard-user-stats-${connectedAddress}`],
    queryFn: graphqlClient<
      {
        userPoints: {
          balance: string
          lstBalance: string
          point: string
          lastUpdatedTimestamp: string
        }[]
      },
      { address: string }
    >(
      `
      query GetUserStats($address: Bytes!) {
        userPoints(where: {id: $address}) {
          balance
          point
          lastUpdatedTimestamp
        }
      }
    `,
      { address: connectedAddress },
    ),
  })

  const userELStats = useQuery({
    queryKey: [`dashboard-user-el-stats-${connectedAddress}`],
    queryFn: graphqlClient<
      {
        userELPointPortions: {
          lstBalance: string
          elPointPortion: string
          lastUpdatedTimestamp: string
        }[]
      },
      { address: string }
    >(
      `
      query GetUserELStats($address: Bytes!) {
        userELPointPortions(where: {id: $address}) {
          lstBalance
          elPointPortion
          lastUpdatedTimestamp
        }
      }
    `,
      { address: connectedAddress },
    ),
  })

  const referralId = address ? hexToBase62(address) : ''

  const referralStats = useQuery({
    queryKey: [`dashboard-user-referral-${referralId}`],
    queryFn: graphqlClient<
      {
        referrals: {
          referees: {
            balance: string
            point: string
            lastUpdatedTimestamp: string
          }[]
        }[]
      },
      { referral: string }
    >(
      `
      query GetReferral($referral: String!) {
        referrals(where: {id: $referral}) {
          referees {
            balance
            point
            lastUpdatedTimestamp
          }
        }
      }
    `,
      { referral: referralId },
    ),
  })

  const totalStats = useQuery({
    queryKey: [`dashboard-total`],
    queryFn: graphqlClient<
      {
        totalPoints: {
          totalSupply: string
          totalPoint: string
          lastUpdatedTimestamp: string
        }[]
        totalELPoints: {
          totalLstBalance: string
          totalElBalance: string
          totalElPoint: string
          lastUpdatedTimestamp: string
        }[]
        totalELPointPortions: {
          totalLstBalance: string
          totalElPointPortion: string
          lastUpdatedTimestamp: string
        }[]
      }
    >(
      `
      query GetTotal {
        totalPoints(first: 1) {
          totalSupply
          totalPoint
          lastUpdatedTimestamp
        }
        totalELPoints(first: 1) {
          totalElBalance
          totalElPoint
          lastUpdatedTimestamp
        }
        totalELPointPortions(first: 1) {
          totalLstBalance
          totalElPointPortion
          lastUpdatedTimestamp
        }
      }
    `
    ),
  })

  const isLoading = userStats.isLoading || referralStats.isLoading || totalStats.isLoading

  let assetBalance = 0n

  if (novEthData) {
    assetBalance = novEthData[0].result as bigint
  }

  const userPoints = userStats.data && userStats.data.userPoints.length > 0 ? userStats.data.userPoints[0] : null;
  const referrals = referralStats.data && referralStats.data.referrals.length > 0 ? referralStats.data.referrals[0].referees : null;
  const totalPoints = totalStats.data && totalStats.data.totalPoints.length > 0 ? totalStats.data.totalPoints[0] : null;
  const totalELPoints = totalStats.data && totalStats.data.totalELPoints.length > 0 ? totalStats.data.totalELPoints[0] : null;
  const userELPointPortions = userELStats.data && userELStats.data.userELPointPortions.length > 0 ? userELStats.data.userELPointPortions[0] : null;
  const totalELPointPortions = totalStats.data && totalStats.data.totalELPointPortions.length > 0 ? totalStats.data.totalELPointPortions[0] : null;

  const getPoint = (lastPoint: string, balance: string, lastUpdatedTimestamp: string) => {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    return BigInt(lastPoint) + BigInt(balance) * (BigInt(currentTimestamp - Number(lastUpdatedTimestamp))) * POINT_MULTIPLIER / 86400n
  }

  const getELPoint = (lastPoint: string, balance: string, lastUpdatedTimestamp: string) => {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    return BigInt(lastPoint) + BigInt(balance) * (BigInt(currentTimestamp - Number(lastUpdatedTimestamp))) / 3600n
  }

  const getELPointPortion = (lastPoint: string, balance: string, lastUpdatedTimestamp: string) => {
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);
    return BigInt(lastPoint) + BigInt(balance) * (BigInt(currentTimestamp - Number(lastUpdatedTimestamp)))
  }

  const totalElPoint = totalELPoints == null ? 0n : getELPoint(totalELPoints.totalElPoint, totalELPoints.totalElBalance, totalELPoints.lastUpdatedTimestamp);
  const totalELPointPortion = totalELPointPortions == null ? 0n : getELPointPortion(totalELPointPortions.totalElPointPortion, totalELPointPortions.totalLstBalance, totalELPointPortions.lastUpdatedTimestamp);
  const userELPointPortion = userELPointPortions == null ? 0n : getELPointPortion(userELPointPortions.elPointPortion, userELPointPortions.lstBalance, userELPointPortions.lastUpdatedTimestamp);
  
  const eth1 = 1_000000000_000000000n

  const calculatePercentage = (
    portion: string | bigint | undefined,
    total: string | bigint | undefined,
  ) =>
    portion && total && BigInt(total) > 0
      ? (BigInt(portion) * eth1) / BigInt(total)
      : undefined

  const userPoint = userPoints == null ? 0n : getPoint(userPoints.point, userPoints.balance, userPoints.lastUpdatedTimestamp)
  const userReferralPoint = referrals == null ? 0n : referrals.reduce((val, cur)=>{return getPoint(cur.point, cur.balance, cur.lastUpdatedTimestamp) * 15n / 100n + val}, 0n)
  const userElPoint = totalELPointPortion == 0n ? 0n : totalElPoint * userELPointPortion / totalELPointPortion
  const totalPoint = totalPoints == null ? 0n : getPoint(totalPoints.totalPoint, totalPoints.totalSupply, totalPoints.lastUpdatedTimestamp)
  const percentTotalXp = calculatePercentage(
    userPoint,
    totalPoint,
  )
  const percentTotalELPoints = calculatePercentage(
    userElPoint,
    totalElPoint,
  )

  return {
    isLoading,
    assetBalance,
    userPoint,
    userReferralPoint,
    userElPoint,
    totalPoint,
    totalElPoint,
    percentTotalXp,
    percentTotalELPoints,
  }
}
