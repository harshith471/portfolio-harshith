import React from 'react'
import './Services.css'
import { FaCode } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiSolidPaint } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";


const Skills = () => {
  return (
    <div className='body2'>
      <Fade direction="down" fraction={0.3} triggerOnce>
      <h1 className='heading'>My <span style={{color:'aqua'}}>Services</span></h1></Fade>
      <div className='services-container'>
        <Zoom duration={500} delay={0} triggerOnce='false' fraction={0.5}>
        <div className='services-box'>
          <div className="icon">
            <i><FaCode /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Web Development</h3>
          <p>I specialize in developing responsive and user-friendly websites that are both visually appealing and highly functional. Whether it's a personal blog, business site, or e-commerce platform, I ensure smooth performance and seamless navigation across all devices.</p>
        </div>
        </Zoom>

        <Zoom duration={500} delay={200} triggerOnce='false' fraction={0.5}>
        <div className='services-box'>
          <div className="icon">
            <i><BiSolidPaint /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>UI/UX Design</h3>
          <p>With a focus on user-centric design, I create intuitive and engaging interfaces that enhance the overall user experience. My approach combines creativity with usability to ensure every interaction is smooth, meaningful, and enjoyable.</p>
        </div></Zoom>

        <Zoom duration={500} delay={400} triggerOnce='false' fraction={0.5}>
        <div className='services-box'>
          <div className="icon">
            <i><IoColorPaletteOutline /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Graphic Design</h3>
          <p>I bring ideas to life through bold and effective visual design. From logos and branding to social media posts and marketing materials, I deliver graphics that capture attention and communicate your message clearly.</p>
        </div></Zoom>
      </div>
      <div className='services-container1'>
        <Zoom duration={500} delay={600}triggerOnce='false' fraction={0.3}>
        <div className='services-box'>
          <div className="icon">
            <i><RiSlideshow3Line /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Vedio Editing</h3>
          <p>I turn raw footage into compelling video content with professional editing techniques. Whether it's for social media, events, or promotional purposes, I enhance the visual narrative through pacing, effects, and sound design.</p>
        </div></Zoom>

        <Zoom duration={500} delay={800} triggerOnce='false' fraction={0.3}>
        <div className='services-box'>
          <div className="icon">
            <i><IoCameraOutline /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Photography</h3>
          <p>I offer high-quality photography services that capture moments with clarity and emotion. From portraits and events to product and lifestyle shoots, I focus on storytelling through the lens.</p>
        </div></Zoom>

      </div>
    </div>
  )
}

export default Skills
