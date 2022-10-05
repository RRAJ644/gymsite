import React from 'react'
import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className='main-header'>
      <div className='container main-header-cont'>
        <div className='main-header-left'>
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Let's live a healthy life. Let's be fit from today only.
            Work hard from now onwards.
          </p>
          
            <Link to="/plans" className='btn lg'>Get Started</Link>
          
        </div>
        <div className='main-header-right'>
          <div className='main-header-circle'></div>
            <div className='main-header-image'>
              <img src={Image} alt='Loading...'></img>
            </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader