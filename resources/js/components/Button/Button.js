import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#6c8bc7' : '#EFFFFA')};
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: ${({ round }) => (round ? '10px' : '0')};
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: .3s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#EFFFFA' : '#6c8bc7')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};
  &:hover {
    transform: translateY(-2px);
  }
`;