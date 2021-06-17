import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'



const StyledHeadingCard = styled(Card)`
  
  background-image: linear-gradient(165deg, #6f12e0, #459bdb, #459bdb);
  min-height: 376px;
  box-shadow: 12px 16px 4px rgba(224,224,231,0.5);
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
    margin-left: 300px;
    margin-right: auto;
    width = 50%
`



const Subtitle = styled.div`
  color: white;
  font-size: 18px;
  max-width: 400px;
  padding-left: 30px;
  padding-top: 5px;
`

const HorizontalLayout = styled.div`
  margin-top: 24px;
`

const Title = styled.div`
    color: white;
    font-size: 70px;
    max-width: 400px;
    padding-left: 30px;
    padding-top: 100px;
`

const HomeHeaderCard = () => {
    // use this function for translations, for string to be translated,
    // need to include in the string in translation.json file
    // more is written about translation in CONTRIBUTING.md
    const { t } = useTranslation()

    const subtitle = "Value Oriented, Economically Sustainable Hybrid Yield Aggregator"
    const title = "BCharity"
    return (
        <StyledHeadingCard>
            <CardBody>
                <Title>
                    {title}
                </Title>
                <Subtitle color="white"> {subtitle} </Subtitle>
                 { /* TODO: insert cat image here */ }
                <CardImage
                    src="/images/temp/test-image-bee.svg"
                    alt="cartoon cat holding coffee mug" />
            </CardBody>
        </StyledHeadingCard>
    )
}

export default HomeHeaderCard
