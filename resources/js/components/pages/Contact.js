import React from 'react'
import Header from '../Header/Header';
import ContactForm from '../Intouch/Contact';

import image from '../assets/images/img-19.jpg'

function Contact() {
  return (
    <>
      <Header src={image} header={'Contact Us'} paragraph={'Get In Touch'} />
      <ContactForm></ContactForm>
    </>
  )
}

export default Contact;
