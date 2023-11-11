import styled from "styled-components";

const Container = styled.div`
width: 100%;
max-width: 1440px;
padding: 0 100px;
margin: 0 auto;
`;

const TitleBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

const Title = styled.strong`
color: ${({ type }) => type ? '#6200EE' : '#151515'};
font-family: Mulish;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
`;

const CreateBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 16px;
`;

const Input = styled.input`
width: 320px;
border-radius: 6px;
border: 1px solid #EBEBEB;
background: #FEFEFE;
outline: none;
height: 47px;
padding: 14px 16px;
`;

const ButtonWrap = styled.div`
:active{
  background:  #32007a;
  transition: .4s;
}
`;

const Button = styled.div`
display: flex;
padding: 10px 24px;
justify-content: center;
align-items: center;
gap: 12px;
border-radius: 4px;
background:  #6200EE;
color: #fff;
cursor: pointer;
transition: .4s;
`;

const Text = styled.div`
color: #151515;
font-family: Mulish;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 12px 0 36px 0;
`;

const Box = styled.div`
display: flex;
flex-wrap: wrap;
gap: 24px;
`;

const Item = styled.div`
width: 32%;
padding: 32px;
display: flex;
flex-direction: column;
gap: 16px;
border-radius: 12px;
border: 1px solid #EBEBEB;
background: #fff;
box-shadow: 0px 4px 24px 0px rgba(51, 51, 51, 0.08);
`;

const ItemTitle = styled.div`
color: #151515;
font-family: Mulish;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`;

const ItemText = styled.div`
color: #333;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 150%;
`;

const ItemFooterBtnWrap = styled.div`
:active{
  background: #c3b1de;
  transition: .4s;
}
`;

const ItemFooterBtn = styled.div`
padding: 2px 12px;
border-radius: 8.5px;
background: #EFE6FD;
color: #9654F4;
text-align: center;
font-family: Mulish;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
cursor: pointer;
transition: .4s;
`;



export {
  Container,
  TitleBox,
  Title,
  CreateBox,
  Input,
  ButtonWrap,
  Button,
  Text,
  Box,
  Item,
  ItemTitle,
  ItemText,
  ItemFooterBtn,
  ItemFooterBtnWrap
}