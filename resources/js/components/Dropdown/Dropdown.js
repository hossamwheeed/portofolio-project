import React  from 'react';
import { useHistory } from 'react-router-dom';
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownLinkR, DropdownLink, DropdownMenu, BtnWrap } from './Dropdown.styles';
import { Button } from '../Button/Button';


function Dropdown({ isOpen, toggle }) {
  let history = useHistory();

  function toHome() {
    history.push("/")
  }
  return (
    <DropdownContainer isOpen={isOpen} onClick={() => toggle()}>
      <Icon onClick={() => toggle()}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {/* <DropdownLinkR
            to='/'
          >
            Home
            </DropdownLinkR> */}
          <DropdownLinkR
            to='/about'
          >
            About
            </DropdownLinkR>
          <DropdownLink
            to='services'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={() => {
              toggle()
              toHome()
            }}
          >
            Our Services
            </DropdownLink>
          <DropdownLinkR
            to='/Projects'
          >
            Projects
            </DropdownLinkR>
          <DropdownLink
            to='news'
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onClick={() => {
              toggle()
              toHome()
            }}
          >
            Last News
            </DropdownLink>
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" big='true' round='true' to='/contact'>
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown;
