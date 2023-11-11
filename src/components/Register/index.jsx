import React, { useState } from 'react'
import {
  Box,
  Button,
  ButtonWrap,
  Container,
  Content,
  Form,
  FormLink,
  FormText,
  FormWrapper,
  Icons,
  Input,
  Item,
  Label,
  Line,
  Text,
  Title
} from './style';
import { useNavigate } from 'react-router-dom';
import md5 from 'md5';

export default function Register () {

  const navigate = useNavigate();
  const [body, setBody] = useState({
    name: '',
    email: '',
    key: '',
    secret: "Myazimov"
  });
  const [md5Hash, setMd5Hash] = useState("");


  const convertMD5 = () => {
    const hash = md5("POST" + "/signup" + { isbn: "9781118464465" } + body.secret);
    setMd5Hash(hash);
  };

  const Change = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    })
  }
  const Click = (e) => {
    e.preventDefault();
    convertMD5();
    console.log(md5Hash);
    fetch('http://0001.uz/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(res => res.isOk && navigate('/home'));
  }

  return <Container>
    <Box>
      <Title>Sign up</Title>
      <Item>
        <Icons.Google />
        <Content>Continue with Google</Content>
      </Item>
      <Item>
        <Icons.Facebook />
        <Content>Continue with Facebook</Content>
      </Item>
      <Item type='noborder'>
        <Line />
        <Text>OR</Text>
        <Line />
      </Item>
      <Form>
        <FormWrapper>
          <Label>Your name</Label>
          <Input type='text' placeholder='Enter your name' name='name' onChange={Change} />
        </FormWrapper>
        <FormWrapper>
          <Label>Your email</Label>
          <Input type='email' placeholder='Enter your email' name='email' onChange={Change} />
        </FormWrapper>
        <FormWrapper>
          <Label>Your username</Label>
          <Input type='text' placeholder='Enter your username' name='key' onChange={Change} />
        </FormWrapper>
        <ButtonWrap>
          <Button onClick={Click}>Button</Button>
        </ButtonWrap>
        <FormText>Already signed up? <FormLink>Go to sign in.</FormLink></FormText>
      </Form>
    </Box>
  </Container>
}