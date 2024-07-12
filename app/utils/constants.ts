import ethxSrc from '~/assets/ethx.svg'
import ethSrc from '~/assets/ETH.svg'
import stEthSrc from '~/assets/stETH.svg'
import rEthSrc from '~/assets/rETH.svg'
import cbEthSrc from '~/assets/cbETH.svg'

export interface Tag {
  title: string
  color: string
  tooltip?: string
}

export interface Asset {
  symbol: string
  src: string
  name: string
  tags?: Tag[]
}

export const assets = [
  { symbol: 'stETH', src: stEthSrc, name: 'Lido Staked ETH' },
  // {
    //   symbol: 'cbETH',
    //   src: cbEthSrc,
    //   name: 'Coinbase Staked Ether',
    // },
    {
      symbol: 'ETHx',
      src: ethxSrc,
      name: 'Stader ETHx',
    },
    {
      symbol: 'rETH',
      src: rEthSrc,
      name: 'Rocket Pool ETH',
      // tags: [
        //   {
          //     title: '1.1x Novum Points Boost',
          //     color: 'red-outline',
          //   },
          // ],
    },
    {
      symbol: 'ETH',
      src: ethSrc,
      name: 'Ether',
    },
] as Asset[]

export const unstakableAssets = [
  { symbol: 'stETH', src: stEthSrc, name: 'Lido Staked ETH' },
  {
    symbol: 'ETHx',
    src: ethxSrc,
    name: 'Stader ETHx',
  },
  {
    symbol: 'rETH',
    src: rEthSrc,
    name: 'Rocket Pool ETH',
  },
] as Asset[]

// Ensure there is a contract address for each asset above
export const contracts = {
  // cbETH: '0x8720095Fa5739Ab051799211B146a2EEE4Dd8B37',
  stETH: '0x3F1c547b21f65e10480dE3ad8E19fAAC46C95034',
  rETH: '0x7322c24752f79c05FFD1E2a6FCB97020C1C264F1',
  ETHx: '0xB4F5fc289a778B80392b86fa70A7111E5bE0F859',
  ETH: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',

  novETH: '0x37a312d718405e231a43e61ccd2bd2e6a2e2c8b7',
  lrtOracle: '0x9b443c822f7801DdD0004C385BF89bE9476fa256',
  lrtDepositPool: '0xbB1836e0f43CCd9b6e7Cb11B70179F72e444C25b',
  lrtConfig: '0xB9CE9fD3DF4A13A5b63c9f0535b55095fE9F5cCB',
  lrtWithdrawalManager: '0x31F5FC56eF6A77d4F13A2b9cfAB5D6a2B112A42c'
} as const

export const HOLESKY_RPC_URL = 'https://ethereum-holesky-rpc.publicnode.com'

export const lrtOraclePriceMethod = 'novETHPrice'

export const depositsEndDate = new Date()
depositsEndDate.setUTCFullYear(2026, 6, 9)
depositsEndDate.setUTCHours(19, 55, 0, 0)

export const eigenWeekStart = new Date()
eigenWeekStart.setUTCFullYear(2024, 2, 18)
eigenWeekStart.setUTCHours(19, 0, 0, 0)

export const eigenWeekEnd = new Date()
eigenWeekEnd.setUTCFullYear(2024, 2, 25)
eigenWeekEnd.setUTCHours(19, 0, 0, 0)
