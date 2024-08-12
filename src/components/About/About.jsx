import React from 'react'
import './About.css'
import Hero from '../Hero/Hero'
import travel5 from '../../assets/travel5.jpg'
import Trip from '../Trip/Trip'
import Aboutdata from './Aboutdata'

const About = () => {
  return (
    <div>
        <Hero
        cName="hero"
        heroImage={travel5}
        title="About Travel Location"
        text="Choose your favourite Destination All Over The World."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        ></Hero>
        <Aboutdata></Aboutdata>
        <Trip></Trip>
    </div>
  )
}

export default About