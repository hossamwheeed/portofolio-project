import React  from 'react';
import { useEffect, useRef, useState } from 'react';

import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImg,
  HeroContent,
  Arrow,
  SliderButtons,
  NextArrow,
  FixedSM,
  SMTag,
  FaceFa,
  TwitterFa,
  InstaFa,
  LinkedFa,
  YoutubeFa,
  PinterestFa
} from './Hero.styles';

import { Button } from '../Button/Button';


const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }
    timeout.current = setTimeout(nextSlide, 10000)
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  // const prevSlide = () => {
  //   if (timeout.current) {
  //     clearTimeout(timeout.current)
  //   }
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // }
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <HeroSection>
      <HeroWrapper>
        <FixedSM>
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
        </FixedSM>
        {
          slides.map((slide, index) =>
          (<HeroSlide key={index}>
            {index === current && (
              <HeroSlider>
                <HeroImg src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button to={slide.path} primary="true"
                    css={`max-width: 160px;`}
                  >
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>))
        }
        <SliderButtons>
          {/* <PrevArrow onClick={() => prevSlide()} /> */}
          <NextArrow onClick={() => nextSlide()} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero;
