import styled from "styled-components";

import { ReactComponent as google } from "../../assets/icons/google.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";

const Icons = styled.div``;
Icons.Google = styled(google)``;
Icons.Facebook = styled(facebook)``;

const Container = styled.div`
width: 100%;
max-width: 1440px;
height: 100vh;
padding: 0 100px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`;

const Box = styled.div`
width: 430px;
height: 695px;
padding: 48px 28px;
display: flex;
flex-direction: column;
align-items: center;
gap: 36px;
flex-shrink: 0;
border-radius: 12px;
background: #FEFEFE;
box-shadow: 0px 4px 32px 0px rgba(51, 51, 51, 0.04);
`;

const Title = styled.div`
color: #151515;
font-family: Mulish;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const Item = styled.div`
padding: ${({ type }) => type ? '0' : '10px 24px'};
display: flex;
justify-content: center;
align-items: center;
gap: 16px;
align-self: stretch;
border-radius: 4px;
border: ${({ type }) => type ? 'none' : '1px solid #151515'};
cursor: pointer;
`;

const Content = styled.div`
color: #151515;
font-family: Mulish;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

const Text = styled.span`
color: #24272C;
text-align: center;
font-family: Mulish;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Line = styled.div`
width: 100%;
height: 1px;
background: #24272C;
`;

const Form = styled.form`
width: 100%;
`;

const FormWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
row-gap: 4px;
margin-bottom: 16px;
:focus{
  border: 1px solid #777;
}
`;

const Label = styled.label`
color: #151515;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 120%;
`;

const Input = styled.input`
display: flex;
height: 47px;
padding: 14px 16px;
align-items: center;
gap: 16px;
align-self: stretch;
border-radius: 6px;
border: 1px solid #EBEBEB;
background: #FEFEFE;
outline: none;
box-shadow: 0px 4px 18px 0px rgba(51, 51, 51, 0.04);
`;

const ButtonWrap = styled.div`
width: 100%;
border: none;
margin: 20px 0 12px 0;
:active{
  background: #4500a7;
}
`;

const Button = styled.button`
width: inherit;
padding: 10px 24px;
gap: 8px;
border-radius: 4px;
background: #6200EE;
border: none;
color: #fff;
cursor: pointer;
`;

const FormText = styled.p`
color: #333;
text-align: center;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 120%; 
:hover{
  color: #2f0073;
  text-decoration: underline;
}
`;

const FormLink = styled.span`
color: #6200EE;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 120%;
cursor: pointer;
`;


export {
  Container,
  Box,
  Title,
  Item,
  Content,
  Icons,
  Text,
  Line,
  Form,
  FormWrapper,
  Label,
  Input,
  ButtonWrap,
  Button,
  FormText,
  FormLink
}