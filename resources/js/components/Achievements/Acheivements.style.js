import { RiVipCrown2Line, RiEmotionHappyLine, RiBuilding2Line, RiAwardLine } from 'react-icons/ri'
import styled, { css } from 'styled-components/macro';
import AchImage from '../assets/images/img-9.jpg';

export const AcSection = styled.section`
  background-image: url('${AchImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-attachment: fixed;
  width: 100%;
  height: calc(90vh - 60px);
  padding-top: 200px;
  position: relative;
  color: #EFFFFA;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(108 139 199 /.4);
  }
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
export const AcWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: clamp(1.5rem,6vw,1.7rem);
    margin-bottom: 125px;
    letter-spacing: 5px;
    word-spacing: 20px;

    @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    }
  }
`;
export const Icon = css`
  margin-bottom: 10px;
  transform: translateY(0);
  font-size: 40px;


`;
export const AcContent = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  justify-content: space-around;
  align-items: center;
  text-align: center;
  cursor: pointer;

  & > div:hover  > div{
    transform: translateY(-5px);
    }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    transition: .3s ease-in-out;

    h6 {
      margin-top: 10px;
      font-size: 1.3rem;
      word-spacing: 3px;
      letter-spacing: 2px;

    }
    p {
      font-size: 1.3rem;
      font-weight: bold;
    }

    @media screen and (max-width: 576px) {
    h6,p {
      font-size: 1.15rem;
      word-spacing: normal;
      letter-spacing: normal;
    }
  }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, 1fr);
    h6 {
      font-size: 1rem;

    }
    p {
      font-size: 1rem;
    }
    & > div:first-child, & > div:nth-child(2){
      margin-bottom: 30px;
    }
  }
`;
export const IconCrown = styled(RiVipCrown2Line)`
  ${Icon}
`;
export const IconHappy = styled(RiEmotionHappyLine)`
  ${Icon}
`;
export const IconBuild = styled(RiBuilding2Line)`
  ${Icon}
`;
export const IconAward = styled(RiAwardLine)`
  ${Icon}
`;
