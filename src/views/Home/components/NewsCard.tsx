import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
import { harvest } from 'utils/callHelpers'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import BigNumber from 'bignumber.js/bignumber'
// import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
// import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import UnlockButton from 'components/UnlockButton'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'



const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10003, 'Announcements')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'GooseFinance'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter",
            width: "400"
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard