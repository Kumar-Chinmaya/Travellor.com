import React from 'react'
import './Contact.css'
import Hero from '../Hero/Hero'
import travel11 from '../../assets/travel11.jpg'
import Trip from '../Trip/Trip'
import Contactform from './Contactform'

const Contact = () => {
  return (
    <div>
        <Hero
        cName="hero"
        heroImage={travel11}
        title="Stay Connected With Us"
        text="We Are Always In your Service"
        buttonText="Contact US"
        url="/"
        btnClass="show"
        ></Hero>
        <Contactform></Contactform>
        <Trip></Trip>
    </div>
  )
}

export default Contact