import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'
import { poolsConfig } from 'config/constants'
import { PoolCategory } from 'config/constants/types'

// Addresses
import {
  getAddress,
  // getPancakeProfileAddress,
  // getPancakeRabbitsAddress,
  // getBunnyFactoryAddress,
  // getBunnySpecialAddress,
  getCakeAddress,
  // getLotteryAddress,
  // getLotteryTicketAddress,
  // getLotteryV2Address,
  getMasterChefAddress,
  // getPointCenterIfoAddress,
  // getClaimRefundAddress,
  // getTradingCompetitionAddress,
  // getEasterNftAddress,
  // getCakeVaultAddress,
  // getPredictionsAddress,
  // getChainlinkOracleAddress,
  getGiveAddress,
  // getTestMasterChefAddress,
  // getBscMasterChefAddress,
} from 'utils/addressHelpers'

// ABI
import giveAbi from 'config/abi/give.json'
import bscGiveAbi from 'config/abi/bscGive.json'
import bscMasterchef from 'config/abi/bscMasterchef.json'
import profileABI from 'config/abi/pancakeProfile.json'
import pancakeRabbitsAbi from 'config/abi/pancakeRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'
import bep20Abi from 'config/abi/erc20.json'
import erc721Abi from 'config/abi/erc721.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import cakeAbi from 'config/abi/cake.json'
import ifoV1Abi from 'config/abi/ifoV1.json'
import ifoV2Abi from 'config/abi/ifoV2.json'
import pointCenterIfo from 'config/abi/pointCenterIfo.json'
import lotteryAbi from 'config/abi/lottery.json'
import lotteryTicketAbi from 'config/abi/lotteryNft.json'
import lotteryV2Abi from 'config/abi/lotteryV2.json'
import masterChef from 'config/abi/masterchef.json'
import testMasterChef from 'config/abi/testMasterchef.json'
import sousChef from 'config/abi/sousChef.json'
import sousChefV2 from 'config/abi/sousChefV2.json'
import sousChefBnb from 'config/abi/sousChefBnb.json'
import claimRefundAbi from 'config/abi/claimRefund.json'
import tradingCompetitionAbi from 'config/abi/tradingCompetition.json'
import easterNftAbi from 'config/abi/easterNft.json'
import cakeVaultAbi from 'config/abi/cakeVault.json'
import predictionsAbi from 'config/abi/predictions.json'
import chainlinkOracleAbi from 'config/abi/chainlinkOracle.json'
import { DEFAULT_GAS_PRICE } from 'config'
import { getSettings, getGasPriceInWei } from './settings'

const getContract = (abi: any, address: string, web3?: Web3, account?: string) => {
  const _web3 = web3 ?? web3NoAccount
  const gasPrice = account ? getSettings(account).gasPrice : DEFAULT_GAS_PRICE

  return new _web3.eth.Contract(abi as unknown as AbiItem, address, {
    gasPrice: getGasPriceInWei(gasPrice).toString(),
  })
}

// helper to get our give token contract
export const getGiveContract = (web3?: Web3) => {
  return getContract(giveAbi, getGiveAddress(), web3)
}
export const getBscGiveContract = (web3?: Web3) => {
  return getContract(bscGiveAbi, getBscGiveContract(), web3)
}
//
// // for testing our masterchef contract
// // TODO: delete later
// export const getTestMasterchefContract = (web3?: Web3) => {
//   return getContract(testMasterChef, getTestMasterChefAddress(), web3)
// }
// export const getBscMasterchefContract = (web3?: Web3) => {
//   return getContract(bscMasterchef, getBscMasterChefAddress(), web3)
// }

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}
export const getErc721Contract = (address: string, web3?: Web3) => {
  return getContract(erc721Abi, address, web3)
}
export const getLpContract = (address: string, web3?: Web3) => {
  return getContract(lpTokenAbi, address, web3)
}
export const getIfoV1Contract = (address: string, web3?: Web3) => {
  return getContract(ifoV1Abi, address, web3)
}
export const getIfoV2Contract = (address: string, web3?: Web3) => {
  return getContract(ifoV2Abi, address, web3)
}
export const getSouschefContract = (id: number, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  const abi = config.poolCategory === PoolCategory.BINANCE ? sousChefBnb : sousChef
  // return getContract(testMasterChef, getTestMasterChefAddress(), web3)
  return getContract(abi, getAddress(config.contractAddress), web3)
}
export const getSouschefV2Contract = (id: number, web3?: Web3) => {
  const config = poolsConfig.find((pool) => pool.sousId === id)
  return getContract(sousChefV2, getAddress(config.contractAddress), web3)
}
// export const getPointCenterIfoContract = (web3?: Web3) => {
//   return getContract(pointCenterIfo, getPointCenterIfoAddress(), web3)
// }

// changed to use give token
export const getCakeContract = (web3?: Web3) => {
  // return getContract(giveAbi, getGiveAddress(), web3)
  return getContract(giveAbi, getCakeAddress(), web3)
}
// export const getProfileContract = (web3?: Web3) => {
//   return getContract(profileABI, getPancakeProfileAddress(), web3)
// }
// export const getPancakeRabbitContract = (web3?: Web3) => {
//   return getContract(pancakeRabbitsAbi, getPancakeRabbitsAddress(), web3)
// }
// export const getBunnyFactoryContract = (web3?: Web3) => {
//   return getContract(bunnyFactoryAbi, getBunnyFactoryAddress(), web3)
// }
// export const getBunnySpecialContract = (web3?: Web3) => {
//   return getContract(bunnySpecialAbi, getBunnySpecialAddress(), web3)
// }
// export const getLotteryContract = (web3?: Web3) => {
//   return getContract(lotteryAbi, getLotteryAddress(), web3)
// }
// export const getLotteryTicketContract = (web3?: Web3) => {
//   return getContract(lotteryTicketAbi, getLotteryTicketAddress(), web3)
// }
// export const getLotteryV2Contract = (web3?: Web3) => {
//   return getContract(lotteryV2Abi, getLotteryV2Address(), web3)
// }
// going to try to change it to ours
export const getMasterchefContract = (web3?: Web3) => {
  // return getContract(testMasterChef, getTestMasterChefAddress(), web3)
  return getContract(masterChef, getMasterChefAddress(), web3)
}
// export const getClaimRefundContract = (web3?: Web3) => {
//   return getContract(claimRefundAbi, getClaimRefundAddress(), web3)
// }
// export const getTradingCompetitionContract = (web3?: Web3) => {
//   return getContract(tradingCompetitionAbi, getTradingCompetitionAddress(), web3)
// }
// export const getEasterNftContract = (web3?: Web3) => {
//   return getContract(easterNftAbi, getEasterNftAddress(), web3)
// }

// THIS WILL NOT BE THE VAULT CONTRACT ONLY USED FOR TESTING
export const getCakeVaultContract = (web3?: Web3) => {
  return getContract(cakeVaultAbi, getCakeAddress(), web3)
}
// export const getPredictionsContract = (web3?: Web3) => {
//   return getContract(predictionsAbi, getPredictionsAddress(), web3)
// }
// export const getChainlinkOracleContract = (web3?: Web3) => {
//   return getContract(chainlinkOracleAbi, getChainlinkOracleAddress(), web3)
// }
