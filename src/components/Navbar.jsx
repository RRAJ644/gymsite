import React from 'react'
import Logo from '../images/logo.png'
import {links} from '../data'
import {GoThreeBars} from 'react-icons/go'
import {FaTimes} from 'react-icons/fa'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'
const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
    <nav>
  
        <div className='container nav-cont'>
            <Link to="/" className='logo' onClick={()=> setIsNavShowing(false)}>
                <img src={Logo} alt="Loading"/>
            </Link>
           <ul className={`nav-links ${isNavShowing ? 'show-nav': 'hide-nav'}`}>
            {
                links.map(({name, path}, idx) =>{
                    return(
                        <li key={idx}>
                            <NavLink to={path} className={({isActive})=> isActive? 'active-nav': ''} onClick={()=> setIsNavShowing(prev => !prev)}>{name}</NavLink>
                        </li>
                    )
                })
            }
           </ul>

           <button className='nav-toggle-btn' onClick={()=> setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing?  <FaTimes/>: <GoThreeBars/>
                }
           </button>

        </div>
    </nav>
  )
}

export default Navbar