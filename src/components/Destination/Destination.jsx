import React from 'react'
import './Destination.css'
import Destinationdata from './Destinationdata'
import travel from '../../assets/travel.jpg'
import travel4 from '../../assets/travel4.jpg'
import travel13 from '../../assets/travel13.jpg'
import travel14 from '../../assets/travel14.jpg'


const Destination = () => {
  return (
    <div className='container destination'>
        <h1>Popular Destinations</h1>
        <p>Tour Give you the opppurtunity to explore new</p>
        <Destinationdata
        className="first-des"
        heading="Maracco , California"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, qui sapiente enim perspiciatis aliquid porro debitis, fugit dignissimos laboriosam minima corrupti eligendi, nihil necessitatibus cum dolores. Doloremque quibusdam rerum beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci corrupti inventore perferendis non voluptas esse similique, ut veniam temporibus totam repellat asperiores eum iusto ad ullam quis ipsam error."
        img1={travel}
        img2={travel4}

        ></Destinationdata>
        <Destinationdata
        className="first-des-reverse"
        heading="Singapore , US"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, qui sapiente enim perspiciatis aliquid porro debitis, fugit dignissimos laboriosam minima corrupti eligendi, nihil necessitatibus cum dolores. Doloremque quibusdam rerum beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci corrupti inventore perferendis non voluptas esse similique, ut veniam temporibus totam repellat asperiores eum iusto ad ullam quis ipsam error."
        img1={travel13}
        img2={travel14}

        ></Destinationdata>
    </div>
  )
}

export default Destination