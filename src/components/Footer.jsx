import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin, FaFacebook} from 'react-icons/fa'
import {AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className='container footer-cont'>
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo"/>
                </Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipis.
                </p>
                <div className='footer-socials'>
                    <a href='https://www.linkedin.com/' target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href='https://www.facebook.com/' target="_blank" rel='noreferrer noopener'><FaFacebook/></a>
                    <a href='https://www.twitter.com/' target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href='https://www.instagram.com/' target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>

            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link> 
                <Link to="/trainers">Trainers</Link> 
                <Link to="/gallery">Gallery</Link>  
                <Link to="/contact">Contact</Link> 
            </article>

            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case Studies</Link> 
                <Link to="/s">Events</Link> 
                <Link to="/s">Communities</Link>  
                <Link to="/s">FAQs</Link> 
            </article>

            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
                <Link to="/s">Support</Link> 
            </article>
        </div>

        <div className='footer-copyright'>
            <small>2022 HealthTech pvt. ltd. &copy; All Rights Reserved </small>
        </div>

    </footer>
  )
}

export default Footer