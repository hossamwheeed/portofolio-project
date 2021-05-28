import React  from 'react';
import { Button } from '../Button/Button';
import Header from '../Header/Header';
import InfoSection from '../InfoSection/InfoSection';
import { InfoDataTwo, InfoDataThree } from '../data/infoData';
import image from '../assets/images/img-about.jpg'
import Download from '../assets/images/img-4.jpg';
import styled from 'styled-components';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const AboutCont = styled.div`
  position: relative;
  margin: 5rem 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2rem;

  & > div:first-child {
    border-right: 1px solid #ddd;
    margin-right: 2rem;
    padding-right: 1rem;
  }
  div h6 {
    color: #6c8bc7;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

function About() {
  return (
    <>
      <ScrollToTop />
      <Header marginB="4rem" src={image} header={'About Us'} paragraph={''} />
      <InfoSection {...InfoDataThree} />
      <InfoSection {...InfoDataTwo} />
      <AboutCont>
        <div>
          <h6>Mission</h6>
          <p>We deliver quality, value and upgraded lifestyle through business lines with the highest standards of professionalism and customer service.</p>
        </div>
        <div>
          <h6>Vision</h6>
          <p>The trusted premiere real estate developer who brings value and sustainable prosperity to clients and communities</p>
        </div>
      </AboutCont>
      <div style={{ margin: '2rem' }}>
        <h6 style={{ color: '#6c8bc7', marginBottom: '2rem', fontSize: '1.5rem' }} >
          Looking for more information
        </h6>
        <p style={{ marginBottom: '2rem', fontSize: '1.5rem' }} >Our Portfolio</p>
        <Button big='true' primary='true' round='true' target='_blank' to={Download} download='Yanabee'>
          Download
        </Button>
      </div>
    </>
  )
}
export default About;
