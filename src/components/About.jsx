import React from 'react'
import AwardIcon from '../img/award.png'
import { mobile } from '../responsive'
import styled from 'styled-components'


const Container = styled.div`
 height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({
      flexDirection: "column",
      textAlign: "center",
      marginTop: "50px"
  })}
`

const Left = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  ${mobile({
      width: "100%",
  })}
`

const CardBackground = styled.div`
width: 60%;
  height: 70vh;
  border-radius: 30px;
position: absolute;
  top: 50px;
  left: 50px;
  background-color: #333;
  ${mobile({
      display: "none"
  })}
`

const Card = styled.div`
width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  ${mobile({ 
      height: "30vh"
  })}
`

const CardImage = styled.img`
 width: 100%;
  height: 100%;
  object-fit: cover;
`

const Right = styled.div`
flex: 1;
padding-right: 50px;
${mobile({ padding: "20px" })}
`

const Title = styled.h1`
 font-weight: 400;
`

const SubTitle = styled.p`
 margin: 20px 0px;
`

const Desc = styled.p`
font-weight: 300;
`

const Award = styled.div`
 margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
${mobile({ display: "none" })}
`

const AwardImg = styled.img`
width: 120px;
  height: 120px;
  border-radius: 20px;
`

const AwardTextContainer = styled.div`
width: 70%;
`

const AwardTitle = styled.h4`
   font-weight: bold;
    color: #555;
    margin-bottom: 10px;
`

const AwardDesc = styled.p``

const About = () => {
    return (
        <Container>
            <Left>
                <CardBackground></CardBackground>
                <Card>
                    <CardImage src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="award card image"/>
                </Card>
            </Left>

            <Right>
                <Title>About Me</Title>
                <SubTitle>      
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </SubTitle>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </Desc>
                <Award>
                    <AwardImg src={AwardIcon} alt="award image" />
                    <AwardTextContainer>
                        <AwardTitle>International Design Awards 2021</AwardTitle>
                        <AwardDesc> 
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                            and fugit.
                        </AwardDesc>
                    </AwardTextContainer>
                </Award>
            </Right> 
        </Container>
    )
}

export default About
