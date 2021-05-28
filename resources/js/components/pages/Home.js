import React from 'react';

import '../App.css';
import Hero from '..//Hero/Hero';
import { SliderData } from '../data/SliderData';
import InfoSection from '../InfoSection/InfoSection';
import { InfoDataTwo } from '../data/infoData';
import Achievements from '../Achievements/Achievements';
import LastNews from '../LastNews/LastNews';
import Services from '../OurServices/Services';
import Intouch from '../Intouch/Intouch';
import Projects from '../Projects/Projects';


function Home() {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoDataTwo} display='true' />
      <Achievements />
      <Services />
      <Projects />
      <LastNews />
      <Intouch direction='row' />
    </>
  )
}
export default Home;
