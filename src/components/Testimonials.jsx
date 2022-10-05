import React from 'react'
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import {testimonials} from "../data"
import { useState } from 'react'
import Card from '../UI/Card'

const Testimonials = () => {
    const[index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index];

    const prevTestimonialHandler = ()=>{
        setIndex(prev => prev==0? testimonials.length-1: prev-1);
    }

    const nextTestimonialHandler = ()=>{
        setIndex(prev => (prev+1)%testimonials.length)
    }

  return (
    <section className='testimonials'>
        <div className='container testimonial-cont'>
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials-head"></SectionHead>
            <Card className="testimonial">
                <div className='testimonial-avatar'>
                    <img src={avatar} alt={name}/>
                </div>
                <p className='testimonial-quote'>
                    {`"${quote}"`}
                </p>
                <h5>{name}</h5>
                <small className='testimonial-title'>{job}</small>
            </Card>
            <div className='testimonials-btn-cont'>
                <button className='testimonials-btn' onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>
                <button className='testimonials-btn' onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials