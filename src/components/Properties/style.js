import styled from "styled-components";

const Container = styled.div`
width: 100%;
max-width: 1440px;
padding: 0 100px;
margin: 0 auto;
`;

const TitleBox = styled.div`
display: flex;
justify-content: ${({ type }) => type ? 'center' : 'space-between'};
align-items: center;
margin-bottom: 36px;
`;

const Title = styled.strong`
color: ${({ type }) => type ? '#6200EE' : '#151515'};
font-family: Mulish;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
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
  Box,
  Container,
  Item,
  ItemFooterBtn,
  ItemFooterBtnWrap,
  ItemText,
  ItemTitle,
  Title,
  TitleBox,
}