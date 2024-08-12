import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import travel1 from '../../assets/travel1.jpg'
import Destination from '../Destination/Destination'
import Trip from '../Trip/Trip'

const Home = () => {
  return (
    <div className='home'>
        <Hero
        cName="hero"
        heroImage={travel1}
        title="Your Journey Your Story"
        text="Choose your favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        ></Hero>
        <Destination></Destination>
        <Trip></Trip>
    </div>
  )
}

export default Home