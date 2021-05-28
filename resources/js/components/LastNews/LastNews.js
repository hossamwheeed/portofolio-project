import React from 'react';
import {
  LNSection,
  LNContainer,
  LNWrapper,
  NewsBox
} from './Lastnews.styles';
import ImgS1 from '../assets/images/img-7.jpg';
const LastNews = () => {
  return (
    <LNSection id='news'>
      <h2>Last News</h2>
      <LNContainer>
        <LNWrapper>
          <NewsBox>
            <div><img src={ImgS1} alt="Galala" /></div>
            <h3 className='projectName'>Galala</h3>
          </NewsBox>
          <NewsBox>
            <div><img src={ImgS1} alt="Galala" /></div>
            <h3 className='projectName'>Galala</h3>
          </NewsBox>
          <NewsBox>
            <div><img src={ImgS1} alt="Galala" /></div>
            <h3 className='projectName'>Galala</h3>
          </NewsBox>
        </LNWrapper>
      </LNContainer>
    </LNSection>
  )
}

export default LastNews;
