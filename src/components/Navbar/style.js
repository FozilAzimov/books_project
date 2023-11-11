import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { ReactComponent as check } from "../../assets/icons/check.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as userimg } from "../../assets/icons/userimg.svg";
import { ReactComponent as logout } from "../../assets/icons/logout.svg";

const Icons = styled.div``;
Icons.Check = styled(check)`
cursor: pointer;
`;
Icons.Search = styled(search)`
cursor: pointer;
`;
Icons.Userimg = styled(userimg)`
cursor: pointer;
border-radius: 50%;
`;
Icons.Logout = styled(logout)`
cursor: pointer;
width: 15px;
margin-top: 3px;
`;

const Wrapper = styled.div`
background: rgba(21, 21, 21, .87);
`;

const Container = styled.div`
width: 100%;
max-width: 1440px;
padding: 12px 100px;
margin: 0 auto 24px auto;
`;

const SubWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const LogoFilter = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 24px;
`;

const LogoTitle = styled.strong`
color: ${({ type }) => type ? 'rgba(98, 0, 238, 1)' : 'rgba(255, 255, 255, 1)'};
font-family: Mulish;
font-size: 18px;
font-weight: 700;
line-height: 120%;
letter-spacing: 0.576px;
cursor: pointer;
`;

const SubLogoFilter = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
cursor: pointer;
`;

const InputFilter = styled.input`
width: 264px;
font-family: Mulish;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.16px;
color: rgba(254, 254, 254, 1);
outline: none;
border: none;
background: transparent;
`;

const Bell = styled.img`
cursor: pointer;
`;

const LinkWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 24px;
.active{
  color: rgb(0 234 255 / 70%);
}
`;

const Link = styled(NavLink)`
color: #fff;
text-decoration: none;
font-size: 16px;
`;

const Menu = styled.div`
display: grid;
flex-direction: column;
align-items: start;
padding: 4px 6px;
width: 120px;
background: #fff;
box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.05);
border-radius: 2px;
position: absolute;
left: -30px;
top: 5px;
:hover{
  background: #f3f3f3;
}
:active{
  background: #dadada;
}
`;

const ListWrap = styled.div`
width: 100% !important;
padding: 5px;
display: flex;
align-items: center;
cursor: pointer;
`;

const List = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #000;
cursor: pointer;
margin-left: 10px;
`;

const Img = styled.img`
width: 15px;
margin-top: 3px;
`;


export {
  Icons,
  Wrapper,
  Container,
  SubWrapper,
  LogoFilter,
  SubLogoFilter,
  LogoTitle,
  InputFilter,
  Bell,
  LinkWrapper,
  Link,
  Menu,
  ListWrap,
  List,
  Img,
}