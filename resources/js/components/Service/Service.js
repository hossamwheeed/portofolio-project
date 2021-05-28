
import React  from 'react';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

import { ServiceContainer, SliderContainer, ColumnLeft, ColumnRight } from './Service.styles';

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);


const Service = ({ match }) => {
  // const [service, setService] = useState({});
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {

  }, [])
  // const fetchService = async () => {
  //   const fetchData = await fetch();
  //   const service = await fetchData.json();
  //   setService(service);
  // }
  return (
    <ServiceContainer>
      <ColumnRight>
        <SliderContainer>
          <Swiper
            style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff', 'height': '70%', 'margin-bottom': '1rem' }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}

          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="yanabe3" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={5}
            slidesPerView={5}
            freeMode={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            style={{ 'height': '30%' }}
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="yanabe3" />
            </SwiperSlide>
          </Swiper>
        </SliderContainer>
      </ColumnRight>
      <ColumnLeft>
        <p><b>YNABEE LANDSCAPE</b> Supplies Installs <b>IRRIGATION NETWORKS</b> For All <b>Softscape</b> Elements, Supplied By The World's Leading Irrigation Networks' Suppliers.</p>
        <p>We Also Include The Piping, ﬁttings, Valves And Emitters Whether They Are Sprinklers, Bubblers Or Drippers For All Irrigation Systems. Systems Range From Semi- Automatic To Fully- Automatic, With Central Control And Weather Stations.</p>
      </ColumnLeft>
    </ServiceContainer >
  )
}

export default Service;
