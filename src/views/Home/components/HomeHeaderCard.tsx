import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'


const StyledHeadingCard = styled(Card)`
  margin-top: 50px;  
  background-image: linear-gradient(165deg, #6f12e0, #459bdb, #459bdb);
  box-shadow: 12px 16px 5px #e4e3e9;
  overflow: visible;
  height: 80%;
  position: relative;

`


const CardImage = styled.img`
    margin-top: -300px;
    margin-left: 300px;
    margin-right: auto;
    width: 55%;
    float: right;
    vertical-align: middle;
    
`


const Subtitle = styled.div`
  color: white;
  font-size: 18px;
  max-width: 400px;
  padding-left: 45px;
  padding-top: 10px;
  padding-bottom: 10px;
//   text-shadow: 2px 3px 2px rgba(98,61,222,0.5);
  font-family: "Arial Rounded MT Bold";
  text-align: center;

`

const HorizontalLayout = styled.div`
    float: left;
`

const Title = styled.div`
    color: white;
    font-size: 70px;
    max-width: 400px;
    padding-left: 45px;
    padding-top: 85px;
    text-shadow: 3px 4px 2px rgba(98,61,222,0.6);
    font-family: "Arial Rounded MT Bold";
    text-align: center;
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
                 <CardImage
                    src="/images/BCharity-Images/cat1.png"
                    alt="cartoon cat holding coffee mug" />
            </CardBody>

        </StyledHeadingCard>
    )
}

export default HomeHeaderCard
