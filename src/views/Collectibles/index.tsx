import React from 'react'
import styled from 'styled-components'
import { Heading } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import NftList from './components/NftList'
import RedirectCard from './components/RedirectCard'

const StyledHero = styled.div`
  background-image: linear-gradient(rgba(252, 233, 246,0), rgba(204, 204, 255,0.5));
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  margin-bottom: 24px;
  padding-bottom: 22px;
`

const Collectibles = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <StyledHero>
        <Heading as="h1" scale="xxl" color="secondary">
          {t('Bcharity NFTs')}
        </Heading>
      </StyledHero>
      {/* <NftList /> */}
      <RedirectCard />
    </Page>
  )
}

export default Collectibles
