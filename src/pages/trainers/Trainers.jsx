import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {links, trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import "./Trainers.css"
const Trainers = () => {
  return (
    <>
    <Header title="Our Trainers" image={HeaderImage}>
      We have the best <br/>
      Meet Our Trainers
    </Header>

    <section className='trainers'>
      <div className='container trainers-cont'>
        {
          trainers.map(({id, image, name, job, socials})=>{
            return <Trainer key={id} image={image} name={name} job={job} socials={socials=
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <AiOutlineTwitter/>, link: socials[1]},
                {icon: <FaFacebookF/>, link: socials[2]},
                {icon: <FaLinkedinIn/>, link: socials[3]}
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers