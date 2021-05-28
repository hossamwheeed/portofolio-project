import styled, { css } from 'styled-components/macro';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

export const FooterSection = styled.section`
  width: 100%;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterSM = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;
export const SMTag = styled.a`
  height: 50px;
  width: 51px;
  display: block;
  text-align: center;
  line-height: 52px;
  transition: .3s ease-in-out;
  margin: 0 10px;
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
export const SMIcon = css`
  font-size: 14px;
  color: #EFFFFA;
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