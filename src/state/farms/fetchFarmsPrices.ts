import BigNumber from 'bignumber.js'
import { BIG_ONE, BIG_ZERO } from 'utils/bigNumber'
import { filterFarmsByQuoteToken } from 'utils/farmsPriceHelpers'
import { Farm } from 'state/types'

const getFarmFromTokenSymbol = (farms: Farm[], tokenSymbol: string, preferredQuoteTokens?: string[]): Farm => {
  const farmsWithTokenSymbol = farms.filter((farm) => farm.token.symbol === tokenSymbol)
  const filteredFarm = filterFarmsByQuoteToken(farmsWithTokenSymbol, preferredQuoteTokens)
  return filteredFarm
}

const getFarmBaseTokenPrice = (farm: Farm, quoteTokenFarm: Farm, givePriceBusd: BigNumber): BigNumber => {
  const hasTokenPriceVsQuote = Boolean(farm.tokenPriceVsQuote)

  if (farm.quoteToken.symbol === 'BUSD') {
    return hasTokenPriceVsQuote ? new BigNumber(farm.tokenPriceVsQuote) : BIG_ZERO
  }

<<<<<<< Updated upstream
  if (farm.quoteToken.symbol === 'wBNB') {
    return hasTokenPriceVsQuote ? bnbPriceBusd.times(farm.tokenPriceVsQuote) : BIG_ZERO
=======
  if (farm.quoteToken.symbol === 'WETH') {
    return hasTokenPriceVsQuote ? givePriceBusd.times(farm.tokenPriceVsQuote) : BIG_ZERO
>>>>>>> Stashed changes
  }

  // We can only calculate profits without a quoteTokenFarm for BUSD/BNB farms
  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

  // Possible alternative farm quoteTokens:
  // UST (i.e. MIR-UST), pBTC (i.e. PNT-pBTC), BTCB (i.e. bBADGER-BTCB), ETH (i.e. SUSHI-ETH)
  // If the farm's quote token isn't BUSD or wBNB, we then use the quote token, of the original farm's quote token
  // i.e. for farm PNT - pBTC we use the pBTC farm's quote token - BNB, (pBTC - BNB)
  // from the BNB - pBTC price, we can calculate the PNT - BUSD price
<<<<<<< Updated upstream
  if (quoteTokenFarm.quoteToken.symbol === 'wBNB') {
    const quoteTokenInBusd = bnbPriceBusd.times(quoteTokenFarm.tokenPriceVsQuote)
=======
  if (quoteTokenFarm.quoteToken.symbol === 'WETH') {
    const quoteTokenInBusd = givePriceBusd.times(quoteTokenFarm.tokenPriceVsQuote)
>>>>>>> Stashed changes
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO
  }

  if (quoteTokenFarm.quoteToken.symbol === 'BUSD') {
    const quoteTokenInBusd = quoteTokenFarm.tokenPriceVsQuote
    return hasTokenPriceVsQuote && quoteTokenInBusd
      ? new BigNumber(farm.tokenPriceVsQuote).times(quoteTokenInBusd)
      : BIG_ZERO
  }

  // Catch in case token does not have immediate or once-removed BUSD/wBNB quoteToken
  return BIG_ZERO
}

<<<<<<< Updated upstream
const getFarmQuoteTokenPrice = (farm: Farm, quoteTokenFarm: Farm, bnbPriceBusd: BigNumber): BigNumber => {
  if (farm.quoteToken.symbol === 'BUSD') {
    return BIG_ONE
  }

  if (farm.quoteToken.symbol === 'wBNB') {
    return bnbPriceBusd
=======
const getFarmQuoteTokenPrice = (farm: Farm, quoteTokenFarm: Farm, givePriceBusd: BigNumber): BigNumber => {
  if (farm.quoteToken.symbol === 'DAI') {
    return BIG_ONE
  }

  if (farm.quoteToken.symbol === 'WETH') {
    return givePriceBusd
>>>>>>> Stashed changes
  }

  if (!quoteTokenFarm) {
    return BIG_ZERO
  }

<<<<<<< Updated upstream
  if (quoteTokenFarm.quoteToken.symbol === 'wBNB') {
    return quoteTokenFarm.tokenPriceVsQuote ? bnbPriceBusd.times(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
=======
  if (quoteTokenFarm.quoteToken.symbol === 'WETH') {
    return quoteTokenFarm.tokenPriceVsQuote ? givePriceBusd.times(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
>>>>>>> Stashed changes
  }

  if (quoteTokenFarm.quoteToken.symbol === 'BUSD') {
    return quoteTokenFarm.tokenPriceVsQuote ? new BigNumber(quoteTokenFarm.tokenPriceVsQuote) : BIG_ZERO
  }

  return BIG_ZERO
}

const fetchFarmsPrices = async (farms) => {
<<<<<<< Updated upstream
  const bnbBusdFarm = farms.find((farm: Farm) => farm.pid === 252)
  const bnbPriceBusd = bnbBusdFarm.tokenPriceVsQuote ? BIG_ONE.div(bnbBusdFarm.tokenPriceVsQuote) : BIG_ZERO
=======
  // changed the pid to match out WETH
  // keeping the name to bnb busdFARM but its for WETH
  const giveBusdFarm = farms.find((farm: Farm) => farm.pid === 1)
  const givePriceBusd = giveBusdFarm.tokenPriceVsQuote ? BIG_ONE.div(giveBusdFarm.tokenPriceVsQuote) : BIG_ZERO
>>>>>>> Stashed changes

  const farmsWithPrices = farms.map((farm) => {
    const quoteTokenFarm = getFarmFromTokenSymbol(farms, farm.quoteToken.symbol)
    const baseTokenPrice = getFarmBaseTokenPrice(farm, quoteTokenFarm, givePriceBusd)
    const quoteTokenPrice = getFarmQuoteTokenPrice(farm, quoteTokenFarm, givePriceBusd)
    const token = { ...farm.token, busdPrice: baseTokenPrice.toJSON() }
    const quoteToken = { ...farm.quoteToken, busdPrice: quoteTokenPrice.toJSON() }
    return { ...farm, token, quoteToken }
  })

  return farmsWithPrices
}

export default fetchFarmsPrices
