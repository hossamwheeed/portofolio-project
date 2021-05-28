import React  from 'react';
import { FooterSection, FooterSM, SMTag, FaceFa, TwitterFa, InstaFa, LinkedFa, YoutubeFa, PinterestFa } from './Footer.styles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterSM>
        <SMTag href="https://www.facebook.com/Ynabe3et" target="_blank" rel='noreferrer' smColor='face'>
          <FaceFa />
        </SMTag>
        <SMTag href="https://twitter.com/ynabe3co" target="_blank" rel='noreferrer' smColor='twitter'>
          <TwitterFa />
        </SMTag>
        <SMTag href="https://www.instagram.com/ynabe3co/" rel='noreferrer' smColor='insta'>
          <InstaFa />
        </SMTag>
        <SMTag href="https://www.linkedin.com/company/ynabe3-for-engineering-&-trade/" target="_blank" rel='noreferrer' smColor='linked'>
          <LinkedFa />
        </SMTag>
        <SMTag href="https://www.youtube.com/channel/UC1osWPw8HMxaVFEcBGe88aA" target="_blank" rel='noreferrer' smColor='youtube'>
          <YoutubeFa />
        </SMTag>
        <SMTag href="https://www.pinterest.com/Ynabe3co/_saved/" target="_blank" rel='noreferrer' smColor='pinterest'>
          <PinterestFa />
        </SMTag>
      </FooterSM>
      <div style={{ textAlign: 'center', margin: '10px 0', color: '#8b8b8b' }}>
        <h5>All Rights Reserved Ynabee For Enginering &amp; Trading &copy;2021</h5>
        <h5
          style={{ margin: '20px 0' }}
        >Developed By <a href='https://github.com/ahmedwagd' target='_blank' rel='noreferrer'
          style={{ textDecorationColor: '#fff', color: '#fff' }}
        >Ahmed Wagdy</a> </h5>
      </div>
    </FooterSection >
  )
}

export default Footer;
