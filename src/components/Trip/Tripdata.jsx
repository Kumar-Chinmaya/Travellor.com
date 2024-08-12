import React from 'react'
import './Trip.css'

const Tripdata = (props) => {
  return (
    <div className='trip-package'>
        <div className='package'>
                <img src={props.img} alt="" />
                <div className='trip-text-box'>
                    <h2>{props.heading}</h2>
                    <h4>{props.text}</h4>
                </div>
        </div>
    </div>
  )
}

export default Tripdata