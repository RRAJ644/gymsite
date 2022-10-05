import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import './About.css'
import StoryImage from '../../images/about1.jpg' 
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
        We believe in you that you can do the best for you but how ?
        By focussing on your health.
    </Header>

    <section className='about-story'>
      <div className='container about-story-cont'>
        <div className='about-section-image'>
          <img src={StoryImage} alt='Our Story Image'/>
        </div>

        <div className='about-section-content'>
          <h1>Our Story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
          </p>
        </div>
      </div>
    </section>

    <section className='about-vision'>
      <div className='container about-vision-cont'>
        <div className='about-section-content'>
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
          </p>
        </div>
        <div className='about-section-image'>
          <img src={VisionImage} alt='Our Vision Image'/>
        </div>
      </div>
    </section>

    <section className='about-mission'>
      <div className='container about-mission-cont'>
        <div className='about-section-image'>
          <img src={MissionImage} alt='Our Mission Image'/>
        </div>

        <div className='about-section-content'>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem distinctio nam eaque dicta quod iste asperiores numquam, quasi nobis?
          </p>
        </div>
      </div>
    </section>

    </>
  )
}

export default About