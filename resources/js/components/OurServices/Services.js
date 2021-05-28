import React  from 'react';
import {
  GiOilPump,
  GiTeePipe,
  GiPlantWatering,
  GiFountain,
  GiTestTubes,
  GiPlatform
} from 'react-icons/gi';

import {
  ServicesSection,
  ServicesBox,
  ServiceHeader,
  BoxContent,
  SHeader,
  SeeMore
} from "./Services.styles";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

// import Swiper core and required modules
import SwiperCore, { Scrollbar, Autoplay } from "swiper/core";
// import images
import ImgS1 from '../assets/images/img-3.jpg';
import ImgS2 from '../assets/images/img-4.jpg';
import ImgS3 from '../assets/images/img-6.jpg';
import ImgS4 from '../assets/images/img-7.jpg';
import ImgS5 from '../assets/images/img-8.jpg';
import ImgS6 from '../assets/images/img-11.jpg';

// install Swiper modules
SwiperCore.use([Scrollbar, Autoplay]);



/*

        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}

*/
function Services({ img }) {
  return (
    <ServicesSection id='services'>
      <ServiceHeader>
        Our Services
      </ServiceHeader>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        scrollbar={{
          hide: true
        }}
        breakpoints={{
          "640": {
            "slidesPerView": 1,
            "spaceBetween": 0
          },
          "768": {
            "slidesPerView": 2,
            "spaceBetween": 0
          },
          "1024": {
            "slidesPerView": 4,
            "spaceBetween": 0
          },
          "1440": {
            "slidesPerView": 5,
            "spaceBetween": 0
          }
        }}
      >
        <SwiperSlide>
          <ServicesBox>
            <img src={ImgS1} alt="Drilling Wells" />
            <BoxContent>
              <div className='icon'><GiOilPump /></div>
              <div className='trans'>
                <h4><SHeader to='/drilling'>Drilling Wells</SHeader></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita </p>
                <SeeMore to='/drilling'>See More</SeeMore>
              </div>
            </BoxContent>
          </ServicesBox>
        </SwiperSlide>
        <SwiperSlide>
          <ServicesBox>
            <img src={ImgS2} alt="Pumps" />
            <BoxContent>
              <div className='icon'><GiTeePipe /></div>
              <div className='trans'>
                <h4><SHeader to='/pumps'>Pumps</SHeader></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita </p>
                <SeeMore to='/pumps'>See More</SeeMore>
              </div>
            </BoxContent>
          </ServicesBox>
        </SwiperSlide>
        <SwiperSlide>
          <ServicesBox>
            <img src={ImgS3} alt="Irrigation Networks" />
            <BoxContent>
              <div className='icon'><GiPlantWatering /></div>
              <div className='trans'>
                <h4><SHeader to='/irrigation'>Irrigation Networks</SHeader></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita </p>
                <SeeMore to='/irrigation'>See More</SeeMore>
              </div>
            </BoxContent>
          </ServicesBox>
        </SwiperSlide>
        <SwiperSlide>
          <ServicesBox>
            <img src={ImgS4} alt="landscape" />
            <BoxContent>
              <div className='icon'><GiFountain /></div>
              <div className='trans'>
                <h4><SHeader to='/landscape'>Landscape</SHeader></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita </p>
                <SeeMore to='/landscape'>See More</SeeMore>
              </div>
            </BoxContent>
          </ServicesBox>
        </SwiperSlide>
        <SwiperSlide>
          <ServicesBox>
            <img src={ImgS5} alt="Water Treatment" />
            <BoxContent>
              <div className='icon'><GiTestTubes /></div>
              <div className='trans'>
                <h4><SHeader to='waterTreatment'>Desalination &amp; Water Treatment Plants</SHeader></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita </p>
                <SeeMore to='waterTreatment'>See More</SeeMore>
              </div>
            </BoxContent>
          </ServicesBox>
        </SwiperSlide>
        <SwiperSlide>
          <ServicesBox>
            <img src={ImgS6} alt="Infrastructure" />
            <BoxContent>
              <div className='icon'><GiPlatform /></div>
              <div className='trans'>
                <h4><SHeader to='/infrastructure'>Infrastructure</SHeader></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita </p>
                <SeeMore to='/infrastructure'>See More</SeeMore>
              </div>
            </BoxContent>
          </ServicesBox>
        </SwiperSlide>
      </Swiper>
    </ServicesSection>
  )
}

export default Services;
