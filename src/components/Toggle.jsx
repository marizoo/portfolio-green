import React from 'react'
import Sun from '../img/sun.png'
import Moon from '../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../context'
import styled from 'styled-components'

const ToggleContainer = styled.div`
width: 50px;
height: 20px;
border-radius: 20px;
border: 1px solid #999;
background-color: white;
position: fixed;
top: 10px;
right: 10px;
z-index: 10;
display: flex;
align-items: center;
justify-content: space-around;
`

const IconSun = styled.img`
width: 15px;
height: 15px;
`

const IconMoon = styled.img`
width: 15px;
height: 15px;
`

const ToggleButton = styled.div`
width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #999;
    position: absolute;
    cursor: pointer;
`

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <ToggleContainer>
            <IconSun src={Sun} alt="Sun Icon"/>
            <IconMoon src={Moon} alt="Moon Icon"/>
            <ToggleButton 
            onClick={handleClick}
            style={{left: theme.state.darkMode ? 0 : 25}}
            >

            </ToggleButton>
            
        </ToggleContainer>
    )
}

export default Toggle
