import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
import { ethers } from 'ethers'
import { Route, useRouteMatch, useLocation } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import PageHeader from 'components/PageHeader'
import Page from 'components/layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Image, Heading, RowType, Toggle, Text } from '@pancakeswap/uikit'
import FlexLayout from 'components/layout/Flex'
import { orderBy } from 'lodash'
import { BIG_ZERO } from 'utils/bigNumber'
import referralAbi from 'config/abi/referral.json'
import { getReferralAddress } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { Referral } from 'config/constants/types'

console.log(window.location.hostname);

const ControlContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`
const StyledImage = styled(Image)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`
const RightHeader = styled.div`
  display: inline-block;
  vertical-align: top;
`
const LeftHeader = styled.div`
  display: inline-block;
`

/* 
  export const fetchReferralAndMax = async () => {
    try {
        const calls = ['currentReferralId', 'recordReferral'].map((method) => ({
            address: getReferralAddress(),
            name: method,
          }))
        
        const [[currentReferralId], [recordReferral]] = async () => {await multicallv2(
            referralAbi,
            calls,
          )}
  
      return {
        currentReferralId: currentReferralId ? currentReferralId.toString() : null,
        recordReferral: recordReferral ? recordReferral.toString() : null,
      }
    } catch (error) {
      return {
        currentReferralId: null,
        recordReferral: null,
      }
    }
  }
*/ 

const referralAddress = getReferralAddress()


/*
const fetchRewardsForReferrals= async (
    winningTickets: Referral[],
  ): Promise<{ ticketsWithUnclaimedRewards: Referral[]; cakeTotal: BigNumber }> => {
    const calls = winningTickets.map((winningTicket) => {
        const { roundId, id, rewardBracket } = winningTicket
        return {
          name: 'viewRewardsForTicketId',
          address: referralAddress,
          params: [roundId, id, rewardBracket],
        }
      })
      const referralsCount =  referralsCount ? referralsCount.toString() : null
    
      const referralReward = async() => multicallv2(referralAbi, calls)
    
      const cakeTotal = referralReward.reduce((accum: BigNumber, cakeReward: ethers.BigNumber[]) => {
        return accum.plus(new BigNumber(cakeReward[0].toString()))
      }, BIG_ZERO)
  
    const ticketsWithUnclaimedRewards = winningTickets.map((winningTicket, index) => {
      return { ...winningTicket, cakeReward: cakeRewards[index] }
    })
    return { ticketsWithUnclaimedRewards, cakeTotal }
  }
*/


const Referrals: React.FC = () => {
    const { t } = useTranslation()
    return( 
    <>
        <PageHeader>
        <LeftHeader>
          <Heading as="h1" scale="xxl" color="secondary" mb="24px">
            {t('Referral Program')}
          </Heading>
          <Heading scale="lg" color="text">
            {t('Share the referral link below to invite your friends and earn 1% of your friends earnings.')}
          </Heading>
        </LeftHeader>
      </PageHeader>
      <Page>
      <ControlContainer> 
      <Text> {`${window.location.protocol}//`}{`${window.location.host}/`}{t('%addr%', { addr: referralAddress })} </Text>
      
      </ControlContainer>
      </Page>
    </>
    )
}
export default Referrals 