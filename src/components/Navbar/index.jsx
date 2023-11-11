import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  Bell,
  Container,
  Icons,
  Img,
  InputFilter,
  Link,
  LinkWrapper,
  List,
  ListWrap,
  LogoFilter,
  LogoTitle,
  Menu,
  SubLogoFilter,
  SubWrapper,
  Wrapper
} from './style';

import bell from "../../assets/icons/bell.png";
import signup from "../../assets/icons/signup.png";

import navbar from '../../utils/navbar';
import { Dropdown } from 'antd';

export default function Navbar () {

  const navigate = useNavigate();

  return <>
    <Wrapper>
      <Container>
        <SubWrapper>
          <LogoFilter>
            <SubLogoFilter onClick={() => navigate('/home')}>
              <Icons.Check />
              <LogoTitle><LogoTitle type='logo'>Books </LogoTitle>List</LogoTitle>
            </SubLogoFilter>
            <SubLogoFilter>
              <Icons.Search />
              <InputFilter placeholder='Search for any training you want' />
            </SubLogoFilter>
          </LogoFilter>
          <LogoFilter>
            <LinkWrapper>
              {
                navbar.map(({ id, title, path, hidden }) => {
                  return !hidden && <Link key={id} to={path}
                    className={({ isActive }) => isActive && 'active'}>
                    {title}
                  </Link>
                })
              }
            </LinkWrapper>
          </LogoFilter>
          <LogoFilter>
            <Bell src={bell} />
            <Dropdown
              trigger={['click']}
              dropdownRender={() => {
                return (
                  <Menu>
                    <ListWrap onClick={() => navigate('/register')}>
                      <Img src={signup} />
                      <List data-name='help'>Sign up</List>
                    </ListWrap>
                    <ListWrap>
                      <Icons.Logout />
                      <List data-name='logout'>Log out</List>
                    </ListWrap>
                  </Menu>
                )
              }}
            >
              <Icons.Userimg />
            </Dropdown>
          </LogoFilter>
        </SubWrapper>
      </Container>
    </Wrapper>
    <Outlet />
  </>
}
