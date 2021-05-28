import styled, { css } from 'styled-components/macro';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items:center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(0 0 0 / .6  );
  }
`;
export const HeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  padding-left: 4rem;
  @media screen and (max-width: 576px){
    padding-left: 2rem;
  }
  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgb(0 0 0 /.4);
    text-align: left;
    margin-bottom: .8rem;
  }
  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgb(0 0 0 /.4);
  }
`;
export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: .5rem;
`;
export const SliderButtons = styled.div`
  position: absolute;
  right: 1%;
  display: flex;
  z-index: 10;
`;
const ArrowButtons = css`
  font-size: 18px;
  width: 50px;
  height: 33px;
  color: #6c8bc7;
  cursor: pointer;
  border: 1px solid #6c8bc7;
  background: transparent;
  border-radius: 50px;
  padding: 6px;
  margin-right: 1rem;
  user-select: none;
  transform: rotateZ(90deg);
  transition: .3s;
  &:hover {
    background: #EFFFFA;
    transform: rotateZ(90deg) scale(1.15);
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
    &:hover {
    background: #EFFFFA;
    transform: rotateZ(90deg) scale(1.05);
    }
  }
`;
// export const PrevArrow = styled(IoArrowBack)`
//   ${ArrowButtons}
// `;
export const NextArrow = styled(IoArrowForward)`
  ${ArrowButtons}

`;
export const FixedSM = styled.div`
  position: absolute;
  z-index: 33;
  left: 20px;
  top: 40%;
  @media screen and (max-width: 768px) {
    top: 35%;
  }
`;
export const SMIcon = css`
  font-size: 14px;
  color: #EFFFFA;
`;
export const SMTag = styled.a`
  height: 36px;
  width: 37px;
  display: block;
  text-align: center;
  line-height: 38px;
  transition: .3s ease-in-out;
  margin: 0;
  border: 1px solid transparent;
  border-radius: 50%;
  &:hover {
    background: ${({ smColor }) =>
    (smColor === 'face' && '#4267B2') ||
    (smColor === 'twitter' && '#1DA1F2') ||
    (smColor === 'insta' && '#bc2a8d') ||
    (smColor === 'linked' && '#0077B5') ||
    (smColor === 'youtube' && '#FF0000') ||
    (smColor === 'pinterest' && '#e60023')
  }
  }
`;
export const FaceFa = styled(FaFacebookF)`
  ${SMIcon}
`;
export const TwitterFa = styled(FaTwitter)`
  ${SMIcon}
`;
export const InstaFa = styled(FaInstagram)`
  ${SMIcon}
`;
export const LinkedFa = styled(FaLinkedinIn)`
  ${SMIcon}
`;
export const YoutubeFa = styled(FaYoutube)`
  ${SMIcon}
`;
export const PinterestFa = styled(FaPinterest)`
  ${SMIcon}
`;
