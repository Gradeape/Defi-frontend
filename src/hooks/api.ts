import { useEffect, useState } from 'react'

/* eslint-disable camelcase */
export interface DeBankTvlResponse {
  id: string
  chain: string
  name: string
  site_url: string
  logo_url: string
  has_supported_portfolio: boolean
  tvl: number
}

// used in TotalValueLockedCard.tsx in Home component to get stats
// use use total value locked(tvl) number though
// if we want to to use need to change link below
export const useGetStats = () => {
  const [data, setData] = useState<DeBankTvlResponse | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap')
        const responseData: DeBankTvlResponse = await response.json()

        setData(responseData)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}
