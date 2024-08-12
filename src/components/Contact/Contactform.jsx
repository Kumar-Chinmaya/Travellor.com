import React from 'react'
import './Contact.css'

const Contactform = () => {
  return (
    <div className='container contact-form'>
        <h1>Message Here , We will reach out to You...</h1>
        <form className='form-detail'>
            <input type="text" placeholder='enter your name' required />
            <input type="email" placeholder='enter your email' required />
            <input type="text" placeholder='enter your mobile number' required />
            <input type="text" placeholder='enter your country' required />
            <textarea placeholder='enter your message to us'></textarea>
            <button type='submit' className='submit-button'>Send Message</button>
        </form>
    </div>
  )
}

export default Contactform