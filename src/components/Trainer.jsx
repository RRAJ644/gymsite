import React from 'react'
import Card from '../UI/Card'

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className="trainer">
        <div className='trainer-img'>
            <img src={image} alt={name}/>
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className='trainer-socials'>
            {
                socials.map(({icon, link}, idx)=>{
                    return <a href={link} key={idx} target="_blank" rel='noreffer noopener'>{icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Trainer