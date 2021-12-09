import React, { useContext, useRef, useState } from 'react'
import Phone from '../img/phone.png'
import Email from '../img/email.png'
import Address from '../img/address.png'
import styled from 'styled-components'
import { ThemeContext } from '../context'
import emailjs from 'emailjs-com';
import { mobile } from '../responsive'

const Container = styled.div`
height: 100vh;
  position: relative;
`

const Background = styled.div`
    width: 20px;
  height: 100%;
  background-color: #59b256;
  position: absolute;
`

const Wrapper = styled.div`
padding: 50px;
  display: flex;
  ${mobile({ flexDirection: "column", padding: "0 50px" })};
`

const Left = styled.div`
 flex: 1;
`

const Title = styled.h1`
 font-size: 60px;
  width: 80%;
  ${mobile({ fontSize: "30px" })};
`

const InfoContainer = styled.div``

const InfoItem = styled.div`
 display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
  ${mobile({ 
      margin: "20px 0",
      width: "100%"
      })};
`

const Icon = styled.img`
 width: 30px;
  height: 30px;
  margin-right: 20px;
`

const Right = styled.div`
 flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Desc = styled.p`
font-weight: 200;
padding-right: 20px;
${mobile({ display: "none" })};
`

const Form = styled.form`
 margin-top: 20px;
 ${mobile({
     marginTop: "0px",
    display: "flex",
    flexWrap: "wrap"
 })};
`

const Input = styled.input`
 width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;

  &:focus {
      outline: none;
  }

  ${mobile({
      width: "35%",
    height: "40px",
    margin: "10px",
    marginLeft: "0"
  })};
`

const TextArea = styled.textarea`
 width: 90%;
  margin: 20px 0px;
  font-size: 14px;
  padding-left: 10px;

  &:focus {
      outline: none;
  }
`

const Button = styled.button`
margin-top: 10px;
border: none;
  padding: 15px;
  background-color: #59b256;
  color: white;
  font-weight: 500;
  cursor: pointer;
  ${mobile({marginTop: "10px"})};
`

const Contact = () => {

    const formRef = useRef();
    const[done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


    return (
        <Container>
             <Background></Background>
             <Wrapper>
                 <Left>
                    <Title>Let's discuss your project</Title>
                    <InfoContainer>
                        <InfoItem>
                            <Icon src={Phone} alt="phone icon" />
                            +1 9876 5432 125
                        </InfoItem>
                        <InfoItem>
                            <Icon src={Email} alt="email icon" />
                            sherylcrow@woffmeow.com
                        </InfoItem>
                        <InfoItem>
                            <Icon src={Address} alt="address icon" />
                            951 Landslide Dixie Chicks. Missouri USA.
                        </InfoItem>
                    </InfoContainer>
                 </Left>

                 <Right>
                     <Desc>
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.  
                     </Desc>
                     <Form ref={formRef} onSubmit={handleSubmit}>
                        <Input style={{backgroundColor: darkMode && "#333"}} required type="text" placeholder="Name" name="user_name" />
                        <Input style={{backgroundColor: darkMode && "#333"}} required type="text" placeholder="Subject" name="user_subject" />
                        <Input style={{backgroundColor: darkMode && "#333"}} required type="email" placeholder="Email" name="user_email" />
                        <TextArea style={{backgroundColor: darkMode && "#333"}} required rows="5" placeholder="Message" name="message" />
                        <Button>Submit</Button>
                        {done && "Thank You..."}
                     </Form>
                 </Right>
             </Wrapper>
        </Container>
    )
}

export default Contact
