import React from 'react'
import styled from "styled-components"
import './contact.css'

const Contactus =()=> {
    
  return (
    <wrapper  >
        <h2 className='heading'>Fell Free to contact</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7547.505147008435!2d72.8200345919302!3d18.94234292893931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1de283029ed%3A0x5da3ab75b442c9b!2sMarine%20Lines%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688523603729!5m2!1sen!2sin" 
        width="295%" 
        height="600" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   
   <div className='containerr'>
    <div className='contact-form'>
        <form action='https://formspree.io/f/mzblbpej' method='POST' className='contact-inputs'>
            <input 
            type='text'
            name="username"
            placeholder='username'
            autoComplete='off'
            required
                      />
      <input
              type="email"
              name="Email"
              placeholder="Email (working email)"
              autoComplete="off"
              required
            />
                      <textarea name='message' cols="30" rows={6} ></textarea>
             <input type='submit' value="send" />
            </form>
    </div>
   </div>
   </wrapper>
  )
}

export default Contactus