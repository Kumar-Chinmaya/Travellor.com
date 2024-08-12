import React from 'react'
import './Trip.css'
import travel6 from '../../assets/travel6.jpg'
import travel7 from '../../assets/travel7.jpg'
import travel8 from '../../assets/travel8.jpg'
import Tripdata from './Tripdata'

const Trip = () => {
  return (
    <div className='container trip'>
        <h1>Special Trip</h1>
        <p>Get special Discount and great service from US</p>
        <div className='trip-package'>
            <Tripdata
            img={travel6}
            heading="Bank-Kock"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga beatae quas porro id quia tempora eos quasi, alias ipsum, dicta eaque? Rem deleniti voluptas illum consequatur error harum autem"
            ></Tripdata>
            <Tripdata
            img={travel7}
            heading="Maldives"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga beatae quas porro id quia tempora eos quasi, alias ipsum, dicta eaque? Rem deleniti voluptas illum consequatur error harum autem"
            ></Tripdata>
            <Tripdata
            img={travel8}
            heading="Dubai,UAE"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fuga beatae quas porro id quia tempora eos quasi, alias ipsum, dicta eaque? Rem deleniti voluptas illum consequatur error harum autem"
            ></Tripdata>
        </div>
    </div>
  )
}

export default Trip

