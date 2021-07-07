import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   lpSymbol: 'GIVE',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '0x297aF17d0f9A7345e4bD9a529258E2Afaa7017D2',
  //     137: '0x9Bbcda2606e616659b118399A2823E8a392f55DA',
  //   },
  //   token: tokens.give,
  //   quoteToken: tokens.give,
  // },
  // {
  //   pid: 1,
  //   lpSymbol: 'GIVE-USDC LP',
  //   lpAddresses: {
  //     4: '',
  //     137: '0xe9c29faa9ba030df89dcc4efdcbf50168bae4a58',
  //   },
  //   token: tokens.give,
  //   quoteToken: tokens.usdc,
  // },
  // {
  //   pid: 2,
  //   lpSymbol: 'GIVE-WMATIC LP',
  //   lpAddresses: {
  //     4: '',
  //     137: '0x71cb1552dadb57ad9cf3d5327b2de9035fa39b3f',
  //   },
  //   token: tokens.give,
  //   quoteToken: tokens.wmatic,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'GIVE-QUICK LP',
  //   lpAddresses: {
  //     4: '',
  //     137: '0x933a80ba311C3922E37e32d876AE3f460b2bd343',
  //   },
  //   token: tokens.give,
  //   quoteToken: tokens.quick,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'WMATIC',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '',
  //     137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  //   },
  //   token: tokens.wmatic,
  //   quoteToken: tokens.wmatic,
  //   // earningToken: tokens.give,
  //   // stakingToken: tokens.wmatic,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'USDC',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926',
  //     137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   token: tokens.usdc,
  //   quoteToken: tokens.usdc,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'DAI',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
  //     137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
  //   },
  //   token: tokens.dai,
  //   quoteToken: tokens.usdc,
  // },
  // {
  //   pid: 7,
  //   lpSymbol: 'WBTC',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '',
  //     137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
  //   },
  //   token: tokens.wbtc,
  //   quoteToken: tokens.usdc,
  //   // earningToken: tokens.give,
  //   // stakingToken: tokens.wbtc,
  // },
  // {
  //   pid: 8,
  //   lpSymbol: 'WETH',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  //     137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  //   },
  //   token: tokens.weth,
  //   quoteToken: tokens.usdc,
  // },
  // {
  //   pid: 9,
  //   lpSymbol: 'QUICK',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '',
  //     137: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
  //   },
  //   token: tokens.quick,
  //   quoteToken: tokens.usdc,
  // },
  // {
  //   pid: 10,
  //   lpSymbol: 'CRV',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '',
  //     137: '0x172370d5cd63279efa6d502dab29171933a610af',
  //   },
  //   token: tokens.crv,
  //   quoteToken: tokens.usdc,
  // },
  // {
  //   pid: 11,
  //   lpSymbol: 'AAVE',
  //   isSingleToken: true,
  //   lpAddresses: {
  //     4: '',
  //     137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
  //   },
  //   token: tokens.aave,
  //   quoteToken: tokens.usdc,
  // },
  // {
  //   pid: 12,
  //   lpSymbol: 'MATIC-USDC',
  //   lpAddresses: {
  //     4: '',
  //     137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //   },
  //   token: tokens.wmatic,
  //   quoteToken: tokens.usdc,
  // },
  {
    pid: 0,
    lpSymbol: 'GIVE',
    isSingleToken: true,
    isCommunity: true,
    lpAddresses: {
      4: '',
      137: '0x9Bbcda2606e616659b118399A2823E8a392f55DA',
    },
    qlpAddresses: {
      4: '',
      137: '0xe9c29faa9ba030df89dcc4efdcbf50168bae4a58',
    },
    token: tokens.give,
    quoteToken: tokens.usdc,
  },
  {
    pid: 1,
    lpSymbol: 'GIVE-USDC LP',
    lpAddresses: {
      4: '',
      137: '0xe9c29faa9ba030df89dcc4efdcbf50168bae4a58',
    },
    token: tokens.give,
    quoteToken: tokens.usdc,
  },
  {
    pid: 2,
    lpSymbol: 'GIVE-WMATIC LP',
    lpAddresses: {
      4: '',
      137: '0x71cb1552dadb57ad9cf3d5327b2de9035fa39b3f',
    },
    token: tokens.give,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 3,
    lpSymbol: 'GIVE-QUICK LP',
    lpAddresses: {
      4: '',
      137: '0x933a80ba311C3922E37e32d876AE3f460b2bd343',
    },
    token: tokens.give,
    quoteToken: tokens.quick,
  },
  {
    pid: 4,
    lpSymbol: 'WMATIC',
    isSingleToken: true,
    lpAddresses: {
      4: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    qlpAddresses: {
      4: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    token: tokens.wmatic,
    quoteToken: tokens.usdc,
  },
  {
    pid: 5,
    lpSymbol: 'USDC',
    isSingleToken: true,
    lpAddresses: {
      4: '',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    },
    qlpAddresses: {
      4: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    token: tokens.usdc,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 6,
    lpSymbol: 'DAI',
    isSingleToken: true,
    lpAddresses: {
      4: '',
      137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    },
    qlpAddresses: {
      4: '',
      137: '0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd',
    },
    token: tokens.dai,
    quoteToken: tokens.dai,
  },
  {
    pid: 7,
    lpSymbol: 'WBTC',
    isSingleToken: true,
    lpAddresses: {
      4: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
    },
    qlpAddresses: {
      4: '',
      137: '0xF6a637525402643B0654a54bEAd2Cb9A83C8B498',
    },
    token: tokens.wbtc,
    quoteToken: tokens.wbtc,
  },
  {
    pid: 8,
    lpSymbol: 'WETH',
    isSingleToken: true,
    lpAddresses: {
      4: '',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    qlpAddresses: {
      4: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d',
    },
    token: tokens.weth,
    quoteToken: tokens.weth,
  },
  {
    pid: 9,
    lpSymbol: 'QUICK',
    isSingleToken: true,
    lpAddresses: {
      4: '',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
    },
    qlpAddresses: {
      4: '',
      137: '0x1F1E4c845183EF6d50E9609F16f6f9cAE43BC9Cb',
    },
    token: tokens.quick,
    quoteToken: tokens.quick,
  },
  {
    pid: 11,
    lpSymbol: 'AAVE',
    isSingleToken: true,
    lpAddresses: {
      4: '',
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
    },
    qlpAddresses: {
      4: '',
      137: '0x7c76B6B3FE14831A39C0fec908DA5f17180df677',
    },
    token: tokens.aave,
    quoteToken: tokens.aave,
  },
  {
    pid: 12,
    lpSymbol: 'USDC-MATIC LP',
    isHiddenFarm: true,
    lpAddresses: {
      4: '',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
    },
    token: tokens.usdc,
    quoteToken: tokens.wmatic,
  },
]

export default farms
