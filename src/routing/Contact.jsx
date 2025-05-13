import React from 'react'
import './Contact.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-box">
        <h2>Let's work Together</h2>
        <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit necessitatibus delectus aliquam voluptates ex, in pariatur deserunt earum, voluptate reiciendis ipsam maxime deleniti dolore. Enim quam non placeat debitis soluta? </p>
        <div className="contact-details">
          <i><FaPhone /></i>
          <div className="details">
            <p>Phone</p>
            <p>+91 863 958 2747</p>
          </div>
        </div>
         <div className="contact-details">
          <i><IoMdMail /></i>
          <div className="details">
            <p>Email</p>
            <p>harshithsai472@gmail.com</p>
          </div>
        </div>
        <div className="contact-details">
          <i><FaMapMarkerAlt /></i>
          <div className="details">
            <p>Address</p>
            <p>Eastreen street, near siva temple, Eluru</p>
          </div>
        </div>
      </div>

      <div className="contact-box">
        <form action="">
          <h2 className='heading1'>Contact <span style={{color:'aqua'}}>Me! </span></h2>
          <div className="field-box">
            <input type="text" placeholder='Full Name' required/>
            <input type="email" placeholder='Email Address' required/>
            <input type="text" placeholder='Phone Number' required/>
            <input type="text" placeholder='Email Subject' required/>
            <textarea name="" id="" placeholder='Your message' required></textarea>
          </div>
          <button type='submit' className='btn '> Send Message</button>
        </form>
      </div>
      

    </div>
  )
}

export default Contact
