import React from 'react'
import Header from '../Header/Header'
import image from '../assets/images/img-landscape.jpg'
import Service from '../Service/Service'
import { Button } from '../Button/Button';
import Download from '../assets/images/img-4.jpg';


function WaterTreatment() {
  return (
    <>
      <Header src={image} header={'Water Treatment'} paragraph={'bowl'} />
      <Service />
      <div style={{
        width: '90%',
        marginLeft: 'auto', marginRight: 'auto', marginBottom: '1rem'
      }}>
        <h6 style={{ color: '#6c8bc7', marginBottom: '2rem', fontSize: '1.5rem' }} >
          Looking for more information
        </h6>
        <Button big='true' primary='true' round='true' target='_blank' to={Download} download='Yanabee'>
          Download
        </Button>
      </div>
    </>
  )
}

export default WaterTreatment;
