import { http } from 'wagmi'
import { mainnet, holesky } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

export const config = getDefaultConfig({
  appName: 'NovumETH',
  projectId: 'b6187205b37dc9d704772f16dca5b71e',
  chains: [holesky],
  ssr: true,

  transports: {
    // [mainnet.id]: http(
    //   'https://eth-mainnet.g.alchemy.com/v2/YiFUgWKoJCj8djTWUnkygOMOtF1n-gv9',
    // ),
    [holesky.id]: http(
      'https://ethereum-holesky-rpc.publicnode.com',
    ),
    // [mainnet.id]: http('http://localhost:8545')
  },
})
