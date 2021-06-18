import React from 'react'
import styled from 'styled-components'
import { Flex, CardBody, CardFooter, Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from 'views/Home/components/EarnAPRCard'
import EarnAssetCard from 'views/Home/components/EarnAssetCard'
import WinCard from 'views/Home/components/WinCard'
// new
import TestCard2 from 'views/Home/components/TestCard2'
import TestCard3 from 'views/Home/components/TestCard3'
import TestCard from 'views/Home/components/TestCard'
import HomeHeaderCard from './components/HomeHeaderCard' // TODO: remove later, this is just test component

const Hero = styled.div`
  /* default settings for mobile*/
  align-items: center;
  background-image: url(images/pan-bg-mobile.svg);
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  /* desktop changes*/
  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/temp/test-image-bee.svg'), url('/images/temp/test-image-bee.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`
const CardHeader = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  margin-top: 10px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`
// testing different spans for the cards
const TestCardLayout = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 10;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 12;
    }
  }
`
const FeatureCardDiv = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  margin-top: 10px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 120px;
    & > div {
      grid-column: span 2;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 120px;

    & > div {
      grid-column: span 4;
    }
  }
`

const FeatureText = styled.div`
  color: black;
  font-size: 50px;
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      {/* <Hero> */}
      {/*  <Heading as="h1" scale="xl" mb="24px" color="secondary"> */}
      {/*    /!* Title Header on Homepage *!/ */}
      {/*    {t('B-Charity')} */}
      {/*  </Heading> */}
      {/*  <Text>{t('subtitle here')}</Text> */}
      {/* </Hero> */}

      <div>
        <TestCardLayout>
          <HomeHeaderCard />
        </TestCardLayout>
        <Heading scale="xl" color="black">
          Features
        </Heading>
        <div>
          <FeatureCardDiv>
            <TestCardLayout>
              <TestCard />
            </TestCardLayout>
            <TestCardLayout>
              <TestCard2 />
            </TestCardLayout>
            <TestCardLayout>
              <TestCard3 />
            </TestCardLayout>
          </FeatureCardDiv>
        </div>
        <Cards>
          <FarmStakingCard />
          <LotteryCard />
        </Cards>
        <CTACards>
          <EarnAPRCard />
          <EarnAssetCard />
          <WinCard />
        </CTACards>
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
