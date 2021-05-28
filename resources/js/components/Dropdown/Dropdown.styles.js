import { Link as LinkR } from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';



export const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 /.9);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.9rem;
  right: 1.9rem;
  background: transparent;
  font-size: 1.8rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(FaTimes)`
  color: #EFFFFA;
  transition: .3s ease-in;
  &:hover {
    color: #6c8bc7;
  }
`;
export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 45%;
`;
export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-evenly;
  /* grid-template-rows: repeat(4, 80px); */
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 60px);
  }
`;
export const DropdownLinkR = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EFFFFA;
  font-size: 1.5rem;
  text-decoration: none;
  transform: translateY(0);
  transition: .3s ease-in;

  &:hover {
    color: #6c8bc7;
    transform: translateY(-3px);
  }
`;
export const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #EFFFFA;
  font-size: 1.5rem;
  text-decoration: none;
  transform: translateY(0);
  transition: .3s ease-in;
  cursor: pointer;

  &:hover {
    color: #6c8bc7;
    transform: translateY(-3px);
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;