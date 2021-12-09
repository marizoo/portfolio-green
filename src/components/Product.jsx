import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;

  &:hover Image {
      transform: translateY(-100%);
  }

  ${mobile({
      width: "40%",
      height: "20vh"
  })}
`

const Browser = styled.div`
height: 20px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`

const Circle = styled.div`
width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 3px;
  background-color: white;
`

const Aa = styled.a``

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
  transition: all 10s ease;
`

const Product = ({ img, link }) => {
    return (
        <Container>
            <Browser>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
            </Browser>
            <Aa href={link} target="_blank" rel="noreferrer">
                <Image src={img} alt="" className="p-img" />
            </Aa>
        </Container>
    )
}

export default Product
