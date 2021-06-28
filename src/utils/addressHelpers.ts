import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 56
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[mainNetChainId]
}

// Helper to get address for our own token
export const getGiveAddress = () => {
  return getAddress(tokens.give.address)
}
// export const getBscGiveAddress = () => {
//   return getAddress(tokens.bscGive.address)
// }
//
// // for testing our masterchef contract
// // TODO: delete later
// export const getTestMasterChefAddress = () => {
//   return getAddress(addresses.testMasterChef)
// }

// export const getBscMasterChefAddress = () => {
//   return getAddress(addresses.bscMasterChef)
// }


// changed to use give token instead
export const getCakeAddress = () => {
  return getAddress(tokens.give.address)
}
export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}

export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}

// export const getWbnbAddress = () => {
//   return getAddress(tokens.wbnb.address)
// }
// export const getLotteryAddress = () => {
//   return getAddress(addresses.lottery)
// }
// export const getLotteryTicketAddress = () => {
//   return getAddress(addresses.lotteryNFT)
// }
// export const getLotteryV2Address = () => {
//   return getAddress(addresses.lotteryV2)
// }
// export const getPancakeProfileAddress = () => {
//   return getAddress(addresses.pancakeProfile)
// }
// export const getPancakeRabbitsAddress = () => {
//   return getAddress(addresses.pancakeRabbits)
// }
// export const getBunnyFactoryAddress = () => {
//   return getAddress(addresses.bunnyFactory)
// }
// export const getClaimRefundAddress = () => {
//   return getAddress(addresses.claimRefund)
// }
// export const getPointCenterIfoAddress = () => {
//   return getAddress(addresses.pointCenterIfo)
// }
// export const getBunnySpecialAddress = () => {
//   return getAddress(addresses.bunnySpecial)
// }
// export const getTradingCompetitionAddress = () => {
//   return getAddress(addresses.tradingCompetition)
// }
// export const getEasterNftAddress = () => {
//   return getAddress(addresses.easterNft)
// }
export const getCakeVaultAddress = () => {
  // NOT ACTUALLY THE VAULT ADDRESS
  return getAddress(addresses.masterChef) // changed just there's no import errors
}
// export const getPredictionsAddress = () => {
//   return getAddress(addresses.predictions)
// }
// export const getChainlinkOracleAddress = () => {
//   return getAddress(addresses.chainlinkOracle)
// }
