import React from 'react'
import Me from '../img/kid-girl.png'
import MouseIcon from '../img/mouse.svg'

const Intro = () => {
    return (
        <Container>
            <Left>
                <LeftWrapper>
                    <IntroGreeting>Hello, My name is</IntroGreeting>
                    <IntroName>Sheryl Crow</IntroName>
                    <IntroTitle>
                        <TitleWrapper>
                            <TitleItem>WebDeveloper</TitleItem>
                            <TitleItem>UI/UX Designer</TitleItem>
                            <TitleItem>Photographer</TitleItem>
                            <TitleItem>Writer</TitleItem>
                            <TitleItem>Content Creator</TitleItem>
                        </TitleWrapper>
                    </IntroTitle>
                    <Desc>
                        I design and develop services for customers of all sizes,
                        specializing in creating stylish, modern websites, web services and
                        online stores.
                    </Desc>
                </LeftWrapper>
                <MouseIcon/>
            </Left>
            
            <Right>
                <RightBackground></RightBackground>
                <RightImage src={Me} alt="person photo"/>
            </Right>
        </Container>
    )
}

export default Intro
