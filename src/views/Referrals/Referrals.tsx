import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'
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

const Referrals: React.FC = () => {
    const { t } = useTranslation()
    return( 
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
    )
}
export default Referrals 