import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'

import './Contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      How we can help you
    </Header>
    <section className='contact'>
      <div className='container contact-cont'>
        <div className='contact-wrapper'>
          <a href='mailto:rrajcoder@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href='https://wa.me/+919773764934' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact