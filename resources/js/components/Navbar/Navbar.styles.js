import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { FaBars } from 'react-icons/fa';


export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 2rem;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  transition: all .3s ease-in-out;
`;

export const NavLink = css`
  color: #EFFFFA;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
export const Logo = styled(Link)`
  ${NavLink}
  img{
    width: 150px;
  }
`;
export const MenuBars = styled(FaBars)`
  color: #6c8bc7;
  font-size: 25px;
  cursor: pointer;
  transition: .3s ease-in;
  &:hover {
    color: #EFFFFA;
  }
  /* position: absolute;
  top: 15px;
  right: 27px; */
  
  /* @media screen and (max-width: 768px){
    color: #6c8bc7;
    font-size: 25px;
    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 27px;
    transform: translate(-50%, 70%);
  } */
`;
// export const NavMenu = styled.i`
//   display: flex;
//   align-items: center;
//   margin-right: -48px;
//   @media screen and (max-width: 768px){
//     display: none;
//   }
// `;
// export const NavMenuLink = styled(Link)`
//   ${NavLink}
// `;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;