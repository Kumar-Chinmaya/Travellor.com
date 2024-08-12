import React from 'react'
import './Services.css'
import Hero from '../Hero/Hero'
import travel9 from '../../assets/travel9.jpg'
import Trip from '../Trip/Trip'

const Services = () => {
  return (
    <div>
        <Hero
        cName="hero"
        heroImage={travel9}
        title="Explore Our Prestigious Services"
        text="Your Travel Satisfaction is our Moto.."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        ></Hero>
        <Trip></Trip>
    </div>
  )
}

export default Services