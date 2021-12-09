import React from 'react'
import styled, {keyframes} from 'styled-components'
import Me from '../img/kid-girl.png'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
height: 100vh;
${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ 
      padding: "10px",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "100%",
   })}
`

const LeftWrapper = styled.div`
 padding: 50px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Greeting = styled.h2`
font-size: 30px;
font-weight: 300;
`

const Name = styled.h1`
font-size: 60px;
`

const Title = styled.div`
height: 50px;
overflow: hidden;
`

const move = keyframes`
25% {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(-100px);
  }
  75% {
    transform: translateY(-150px);
  }
  100% {
    transform: translateY(-200px);
  }
`

const TitleWrapper = styled.div`
  height: 100%;
  animation: ${move} 10s ease-in-out infinite alternate;
`

const TitleItem = styled.div`
height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #59b256;
  display: flex;
  align-items: center;
`

const MouseIconStyle = {
    width: "30px",
  height: "30px",
  position: "absolute",
  bottom: "20px"
}

const Desc = styled.p`
${mobile({ display: "none" })}
`

const Right = styled.div`
flex: 1;
position: relative;
`

const RightBackground = styled.div`
clip-path: polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
  background-color: #59b256;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  
`

const RightImage = styled.img`
width: 30%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  right: 200px;
`



const Intro = () => {
    return (
        <Container>
            <Left>
                <LeftWrapper>
                    <Greeting>Hello, My name is</Greeting>
                    <Name>Sheryl Crow</Name>
                    <Title>
                        <TitleWrapper>
                            <TitleItem>WebDeveloper</TitleItem>
                            <TitleItem>UI/UX Designer</TitleItem>
                            <TitleItem>Photographer</TitleItem>
                            <TitleItem>Writer</TitleItem>
                            <TitleItem>Content Creator</TitleItem>
                        </TitleWrapper>
                    </Title>
                    <Desc>
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services and
                        online stores.
                    </Desc>
                </LeftWrapper>
                <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          style={MouseIconStyle}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
            </Left>
            
            <Right>
                <RightBackground></RightBackground>
                <RightImage src={Me} alt="person photo"/>
            </Right>
        </Container>
    )
}

export default Intro
