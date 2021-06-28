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
      137: '',
    },
    token: tokens.give,
    quoteToken: tokens.weth,
  },
  {
    pid: 1,
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
    lpAddresses: {
      4: '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735',
      137: '',
    },
    token: tokens.dai,
    quoteToken: tokens.weth,
  },
  {
    pid: 3,
    lpSymbol: 'MKR',
    lpAddresses: {
      4: '0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85',
      137: '',
    },
    token: tokens.maker,
    quoteToken: tokens.weth,
  },
  {
    pid: 4,
    lpSymbol: 'UNI',
    lpAddresses: {
      4: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
      137: '',
    },
    token: tokens.uniswap,
    quoteToken: tokens.weth,
  },
  {
    pid: 5,
    lpSymbol: 'GIVE-ETH LP',
    lpAddresses: {
      4: '0x53E98FFF0aBa503AB7dF61AaC1c0aE05A4aE9ae6',
      137: '',
    },
    token: tokens.give,
    quoteToken: tokens.weth,
  },
  {
    pid: 6,
    lpSymbol: 'GIVE-DAI LP',
    lpAddresses: {
      4: '0xCda79fCE58C2cFf1f9AeCE96f7bD37334D35ABB6',
      137: '',
    },
    token: tokens.give,
    quoteToken: tokens.dai,
  },

]

export default farms