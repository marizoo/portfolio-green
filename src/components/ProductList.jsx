import React from 'react'
import styled from 'styled-components'
import { products } from '../data'
import Product from './Product'
import { mobile } from '../responsive'

const Container = styled.div`
 padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${mobile({ padding: "10px" })}
`

const TextWrapper = styled.div`
width: 65%;

${mobile({ width: "100%" })}
`

const Title = styled.h1`
 font-size: 50px;
  font-weight: 600;
`

const Desc = styled.p`
 margin: 20px 0px;

 ${mobile({ display: "none" })}
`

const List = styled.div`
width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ProductList = () => {
    return (
        <Container>
           <TextWrapper>
               <Title>Create & Inspire. It's Izoo</Title>
               <Desc>
                    Izoo is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole lot more awaits
                    inside.
                </Desc>
           </TextWrapper>
           <List>
               {products.map((item) => (
                   <Product key={item.id} img={item.img} link={item.link}/>
               ))}
           </List>
        </Container>
    )
}

export default ProductList
