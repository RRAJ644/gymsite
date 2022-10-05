import React from 'react'
import {Link} from 'react-router-dom'
import './notFound.css'
const notFound = () => {
  return (
    <section>
      <div className='contianer notfound-cont'>
        <h2>Page Not Found</h2>
        <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default notFound