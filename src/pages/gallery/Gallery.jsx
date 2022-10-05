import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './Gallery.css'
const Gallery = () => {
  const galleryLength = 15
  const images = []

  for(let i=1; i<=galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return(
    <>
    <Header title="Our gallery" image={HeaderImage}>
      Have a look on us 
    </Header>

    <div className="tag-cont">
      <div className="tagline-cont">
        <p className="tagline"> Let's have a look</p>
      </div>
    </div>

    <section className='gallery'>
      <div className='container gallery-cont'>
        {
          images.map((image, idx)=>{
            return <article key={idx}>
              <img src={image} alt={`Gallery Image ${idx+1}`}/>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery