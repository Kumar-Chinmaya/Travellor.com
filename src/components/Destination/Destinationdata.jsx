import React from 'react'
import './Destination.css'



const Destinationdata = (props) => {
  return (
    <div>
        <div className={props.className}>
            <div className="des-text">
                <h2>{props.heading}</h2>
                <h4>{props.text}</h4>
            </div>
            <div className='destination-image'>
                <img src={props.img1} alt="" />
                <img src={props.img2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Destinationdata