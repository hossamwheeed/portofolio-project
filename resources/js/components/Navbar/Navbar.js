import React  from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { Nav, Logo, MenuWrapper, MenuBars, NavBtn, } from './Navbar.styles';

import { Button } from '../Button/Button';

import logo from '../assets/images/ynabe3-2.png';

function Navbar({ className, toggle }) {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <Nav className={className}>
      <Logo to='/' onClick={toggleHome}>
        <img src={logo} alt="logo" />
      </Logo>
      <MenuWrapper>
        <NavBtn>
          <Button to='/contact' primary='true' round='true'>
            Contact Us
        </Button>
        </NavBtn>
        <MenuBars onClick={() => toggle()} />
      </MenuWrapper>

    </Nav>
  )
}

export default Navbar;
