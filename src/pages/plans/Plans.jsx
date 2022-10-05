import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_4.jpg'
import Card from '../../UI/Card'
import {plans} from '../../data'
import './Plans.css'

const Plans = () => {
  return (
    <>
    <Header title="Membership plans" image={HeaderImage}>
      Choose the best for yourself
    </Header>

    <div className='plans-head'>
      <h2>Our Plans</h2>
    </div>
    <section className='plans'>
      <div className='container plans-cont'>
        {
          plans.map(({id,name, desc, price, features})=>{
            return <Card key={id} className="plan">
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1><h2>/month</h2>
              <h4>Features</h4>
              {
                features.map(({feature, available}, idx)=>{
                  return <p key={idx} className={!available? 'disabled': ''}>{feature}</p>
                })
              }
              <button className='btn lg'>Choose Plan</button>
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans