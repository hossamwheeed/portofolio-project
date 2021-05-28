import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Services = styled.section``;
export const ServicesSection = styled.section`
  width: 100%;
  height: 90vh;
`;
export const ServiceHeader = styled.h2`
  text-align: center;
  color: #6c8bc7;
  padding: 0 2rem;
  font-size: clamp(1.5rem,6vw,1.7rem);
  margin: 2rem 0;
  letter-spacing: 5px;
  word-spacing: 20px;
`;
export const ServicesBox = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  img{
    width: 100%;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(108 139 199 /.4);
  }
`;
export const BoxContent = styled.div`
  padding-top: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  color: #fff;
  overflow: hidden;
  transition: .6s ease-in-out;
  &:hover div:first-child{
    opacity: 0;
  }
  &:hover div:first-child{
    opacity: 0;
  }
  .icon {
    font-size: 7rem;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
    z-index: -30;
    transition: .5s ease-in-out;
  }
  .trans{
    padding-bottom: 2rem;
    height: 100%;
    transform: translateY(65%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: .6s ease-in-out;
  }
  &:hover .trans{
    transform: translateY(0);
  }
`;
export const SIcon = css``;
export const IconWrap = styled.i`${SIcon}`;
export const SHeader = styled(Link)`
  color: #EFFFFA;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  &:hover{
      color: #6c8bc7; 
    }
`;
export const SeeMore = styled(SHeader)`
  font-size: 1rem;
`;
export const SPara = styled.p``;
export const SMore = styled(Link)``;