import React  from 'react';
import { Button } from '../Button/Button';
import styled from 'styled-components';


const ContactWrapper = styled.div`


  @media screen and (max-width: 768px){
    display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  text-decoration: none;
  color: #EFFFFA;
  font-size: 35px;
  transition: .3s ease-in;
  background: #6c8bc7;
  border: 1px solid transparent;
  }
`;

// ?text=Hello%20can%20we%20talk
const ContactFixed = () => {
  return (
    <ContactWrapper >
      <Button primary="true" to='/contact'>
        Contact Us
      </Button>
    </ContactWrapper>
  )
}

export default ContactFixed;
