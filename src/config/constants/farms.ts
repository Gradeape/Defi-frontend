import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'GIVE',
    lpAddresses: {
      4: '0x297aF17d0f9A7345e4bD9a529258E2Afaa7017D2',
      137: '0x9Bbcda2606e616659b118399A2823E8a392f55DA',
    },
    token: tokens.give,
    quoteToken: tokens.weth,
  },
  {
    pid: 1,
<<<<<<< Updated upstream
    lpSymbol: 'WETH',
    lpAddresses: {
      4: '0xdf032bc4b9dc2782bb09352007d4c57b75160b15',
      137: '',
    },
    token: tokens.weth,
    quoteToken: tokens.weth,
  },
  {
    pid: 2,
    lpSymbol: 'DAI',
=======
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
>>>>>>> Stashed changes
    lpAddresses: {
      4: '',
      137: '0x71cb1552dadb57ad9cf3d5327b2de9035fa39b3f',
    },
<<<<<<< Updated upstream
    token: tokens.dai,
    quoteToken: tokens.weth,
  },
  {
    pid: 3,
    lpSymbol: 'MKR',
=======
    token: tokens.give,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 3,
    lpSymbol: 'GIVE-QUICK LP',
>>>>>>> Stashed changes
    lpAddresses: {
      4: '',
      137: '0x933a80ba311C3922E37e32d876AE3f460b2bd343',
    },
<<<<<<< Updated upstream
    token: tokens.maker,
    quoteToken: tokens.weth,
  },
  {
    pid: 4,
    lpSymbol: 'UNI',
=======
    token: tokens.give,
    quoteToken: tokens.quick,
  },
  {
    pid: 4,
    lpSymbol: 'WMATIC',
>>>>>>> Stashed changes
    lpAddresses: {
      4: '',
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    },
    token: tokens.wmatic,
    quoteToken: tokens.usdc,
  },
<<<<<<< Updated upstream
  // {
  //   pid: 5,
  //   lpSymbol: 'GIVE-ETH LP',
  //   lpAddresses: {
  //     4: '0x53E98FFF0aBa503AB7dF61AaC1c0aE05A4aE9ae6',
  //     137: '',
  //   },
  //   token: tokens.give,
  //   quoteToken: tokens.weth,
  // },
  // {
  //   pid: 6,
  //   lpSymbol: 'GIVE-DAI LP',
  //   lpAddresses: {
  //     4: '0xCda79fCE58C2cFf1f9AeCE96f7bD37334D35ABB6',
  //     137: '',
  //   },
  //   token: tokens.give,
  //   quoteToken: tokens.dai,
  // },

]

export default farms
=======
  {
    pid: 5,
    lpSymbol: 'USDC',
    lpAddresses: {
      4: '0xeb8f08a975ab53e34d8a0330e0d34de942c95926',
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    },
    token: tokens.usdc,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 6,
    lpSymbol: 'DAI',
    lpAddresses: {
      4: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
      137: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    },
    token: tokens.dai,
    quoteToken: tokens.usdc,
  },
  {
    pid: 7,
    lpSymbol: 'WBTC',
    lpAddresses: {
      4: '',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
    },
    token: tokens.wbtc,
    quoteToken: tokens.usdc,
  },
  {
    pid: 8,
    lpSymbol: 'WETH',
    lpAddresses: {
      4: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    token: tokens.weth,
    quoteToken: tokens.usdc,
  },
  {
    pid: 9,
    lpSymbol: 'QUICK',
    lpAddresses: {
      4: '',
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13',
    },
    token: tokens.quick,
    quoteToken: tokens.usdc,
  },
  {
    pid: 10,
    lpSymbol: 'CRV',
    lpAddresses: {
      4: '',
      137: '0x172370d5cd63279efa6d502dab29171933a610af',
    },
    token: tokens.crv,
    quoteToken: tokens.usdc,
  },
  {
    pid: 11,
    lpSymbol: 'AAVE',
    lpAddresses: {
      4: '',
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
    },
    token: tokens.aave,
    quoteToken: tokens.usdc,
  },
]
>>>>>>> Stashed changes
