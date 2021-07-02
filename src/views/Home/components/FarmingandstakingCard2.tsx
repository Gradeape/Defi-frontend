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
// import { Button as testbutton } from 'bcharity-uikit'

// font import

// changed name to match card , changed background to gradient
// to stack a bg image on top of gradient, list it before linear-gradient
const StyledTestCard = styled(Card)`

  min-height: 500px;
  min-width: 180px;
  color: #FAF9FA;

  // for the phone but it screws up the desk top
  /* ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 160px;
  } */
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 0x;
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
const ImagePositioning = styled.div`
  position: absolute;
  top: 200px;
  left: 500px;

  // for the phone but it screws up the desk top
  /* ${({ theme }) => theme.mediaQueries.sm} {
    position: absolute;
    top: 110px;
  } */
`
const ImagePositioningTL = styled.div`
  position: absolute;
  top: 200px;
  left: 500px;
`
const TestContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const APRFormat = styled.div`
  font-family: 'Tw Cen MT'; 
  color: black;
  text-align: center;
  font-size: 100px;
  color: #459bdb;
  margin-bottom: 20px;
`

const EarningTextColor = styled.div`
  font-family: 'Tw Cen MT'; 
  color: black;
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px;
  margin-top: 80px;
`

const TextColor = styled.div`
  font-family: 'Tw Cen MT'; 
  color: black;
  text-align: center;
  font-size: 50px;
  margin-bottom: 20px;
`

const BlueCircle = styled.div`
  background-image: linear-gradient(165deg, #ADFCAC, #9895DB, #67B4EB);
  border-radius: 50%;
  width: 250px;
  height: 250px;
  float: left;
  margin-top: -350px;
  margin-left: 40px;
  
`

const BlueCircleA = styled.div`
  background-image: linear-gradient(165deg, #ADFCAC, #9895DB, #67B4EB);
  border-radius: 50%;
  width: 250px;
  height: 250px;
  float: left;
  margin-top: -330px;
  margin-left: 70px;
  margin-right: 10px;
  opacity: 0.5;
`

const OrangeCircle = styled.div`
  background-image: linear-gradient(165deg, #FF7AB0, #FEBD95, #FFAF43);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  float: left;
  margin-top: -54px;
  margin-left: -180px;
  
`
const OrangeCircleA = styled.div`
  background-image: linear-gradient(165deg, #FF7AB0, #FEBD95, #FFAF43);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  float: left;
  margin-top: -55px;
  margin-left: 170px;
  opacity: 0.5;
`

const PinkCircle = styled.div`
  background-image: linear-gradient(165deg, #C36CF3, #F9C0D6, #EA5CF1);
  border-radius: 50%;
  width: 300px;
  height: 300px;
  float: right;
  margin-right: -320px;
  margin-top: -220px;
  
`

const PinkCircleA = styled.div`
  background-image: linear-gradient(165deg, #C36CF3, #F9C0D6, #EA5CF1);
  border-radius: 50%;
  width: 300px;
  height: 300px;
  float: right;
  margin-top: -200px;
  opacity: 0.5;
`

const BlueCircleText = styled.div`
  font-family: 'Tw Cen MT'; 
  color: white;
  text-align: center;
  font-size: 70px;
  position: relative;
  margin-top: 25%;
  
`

const BlueCircleTextA = styled.div`
  font-family: 'Tw Cen MT'; 
  color: white;
  text-align: center;
  font-size: 50px;
  position: relative;
  // margin-top: 20%;
`


const OrangeCircleTextA = styled.div`
  font-family: 'Tw Cen MT'; 
  color: white;
  text-align: center;
  font-size: 70px;
  position: relative;
  margin-top: 20%;
`

const OrangeCircleText = styled.div`
  font-family: 'Tw Cen MT'; 
  color: white;
  text-align: center;
  font-size: 35px;
  position: relative;
`

const PinkCircleText = styled.div`
  font-family: 'Tw Cen MT'; 
  color: white;
  text-align: center;
  font-size: 70px;
  position: relative;
  margin-top: 30%;
`

const TextColorBlue = styled.div`
`
const TextColorPink = styled.div`
  color: #f895ce;
`
const SmallerFont = styled.div`
  font-size: 13px;
`
const ImageDiv = styled.div``
const TextContainer = styled.div`
  max-height: 250px;
  max-width: 250px;
`

const FSCard2 = () => {

  const { t } = useTranslation()
  const APR = '482%'

  return (
    <StyledTestCard>
      <CardBody>
        <EarningTextColor>Earning up to</EarningTextColor>
        <APRFormat>{APR}</APRFormat>
        <TextColor>APR in Farms</TextColor>

        <BlueCircleA> </BlueCircleA>
        <BlueCircle>
          <BlueCircleText>45B</BlueCircleText>
          <BlueCircleTextA>Supply</BlueCircleTextA>
        </BlueCircle>

        
        <OrangeCircleA> </OrangeCircleA>
        <OrangeCircle>
          <OrangeCircleTextA>20</OrangeCircleTextA>
          <OrangeCircleText>New GIVE</OrangeCircleText>
        </OrangeCircle>

        <PinkCircleA> </PinkCircleA>
        <PinkCircle>
          <PinkCircleText>10M Burned</PinkCircleText>
        </PinkCircle>

      </CardBody>
    </StyledTestCard>
  )
}

export default FSCard2
