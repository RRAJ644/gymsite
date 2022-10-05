import React from 'react'
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import{GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className='container values-cont'>
            
            <div className='values-left'>
                <div className='values-image'>
                    <img src={Image} alt="Loading..."></img>
                </div>
            </div>

            <div className='values-right'>
                <SectionHead icon={<GiCutDiamond/>} title='Values'/>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere error architecto repellendus?
                </p>
                <div className='values-wrapper'>
                    {
                        values.map(({id, icon, title,desc})=>{
                            return <Card key={id} className="values-value">
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values