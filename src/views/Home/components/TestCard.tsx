import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
// import { harvest } from 'utils/callHelpers'
// import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
// import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
// import { useMasterchef } from 'hooks/useContract'
// import UnlockButton from 'components/UnlockButton'
// import CakeHarvestBalance from './CakeHarvestBalance'
// import CakeWalletBalance from './CakeWalletBalance'

// changed name to match card , changed background to gradient
// to stack a bg image on top of gradient, list it before linear-gradient
const StyledTestCard = styled(Card)`
  background-image: linear-gradient(rgba(204, 204, 255,1),rgba(252, 233, 246,0.5));
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 18px;
  
`

// colour and size hardcoded for now but for actual should reference theme like Label above
const TestText = styled.div`
    font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const TestCard = () => {
  // use this function for translations, for string to be translated, 
  // need to include in the string in translation.json file
  // more is written about translation in CONTRIBUTING.md
  const { t } = useTranslation()

  // example string of text 
  const exampleTextAbstract = 'BCHARITY is a blockchain-based charity loyalty-point tokenomics ecosystem with better transparency and accountability '
  + 'driven by community DAOs of all the public and altruism stakeholders, including  donors, volunteers, employees, etc, through  system integration'
  + ' of decentralized protocols. BCHARITY products and services include  internal exchange to convert all kind of donations into BCHARITY Token, ' 
  + 'a built-in wallet to store and donate easily, an explorer to track donations transparently, tools to connect donors and service providers with ' 
  + 'all the actors involved in the non-profit sector and templates of smart contracts to run fundraising campaigns and programs.    '

  return (
    <StyledTestCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {/* Card title */}
          {t('About B-charity')}
        </Heading>
        <CardImage src="/images/temp/Ecssen-Logo.png" alt="test card image -bee" width={64} height={64} />
        {/* not good design to have blocks of text like this but this is just a example */}
        <Block>
          <Label>{t('Subtitle')}:</Label>
          <TestText>{t('this is a block of text')}</TestText>
        </Block>
        <Block>
          <Label>{t('Example text')}:</Label>
          <TestText>{t('Abstract: %text%', {text: exampleTextAbstract})}</TestText>
        </Block>
        <Actions>
            <Button
                id="test-button"
                onClick={() => alert('you clicked the button :)')}
                width="100%"
                >
                {t('this is the button label')}
            </Button>
        </Actions>
        {/* <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width="100%"
            >
              {pendingTx
                ? t('Collecting CAKE')
                : t('Harvest all (%count%)', {
                    count: balancesWithValue.length,
                  })}
            </Button>
          ) : (
            <UnlockButton width="100%" />
          )}
        </Actions> */}
      </CardBody>
    </StyledTestCard>
  )
}

export default TestCard
