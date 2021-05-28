import React  from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';


const FixedWhats = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 4rem;
  right: .5rem;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  z-index: 99999;
  text-decoration: none;
  color: #EFFFFA;
  font-size: 35px;
  padding-bottom: 2px;
  transition: .3s ease-in;
  background: #6c8bc7;
  border: 1px solid transparent;
  &:hover {
    background: #EFFFFA;
    border: 1px solid #6c8bc7;
  }
  &:hover svg:first-child {
    color: #6c8bc7;
  }
`;

const WhatsTag = styled(FaWhatsapp)``;
// ?text=Hello%20can%20we%20talk
const Whatsapp = () => {
  return (
    <FixedWhats href='https://api.whatsapp.com/send?phone=201092090391' target='_blank' >
      <WhatsTag />
    </FixedWhats>
  )
}

export default Whatsapp;
