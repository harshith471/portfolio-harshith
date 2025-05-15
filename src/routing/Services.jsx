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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div>
        </Zoom>

        <Zoom duration={500} delay={200} triggerOnce='false' fraction={0.5}>
        <div className='services-box'>
          <div className="icon">
            <i><BiSolidPaint /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>UI/UX Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div></Zoom>

        <Zoom duration={500} delay={400} triggerOnce='false' fraction={0.5}>
        <div className='services-box'>
          <div className="icon">
            <i><IoColorPaletteOutline /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div></Zoom>

        <Zoom duration={500} delay={800} triggerOnce='false' fraction={0.3}>
        <div className='services-box'>
          <div className="icon">
            <i><IoCameraOutline /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Photography</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div></Zoom>

      </div>
    </div>
  )
}

export default Skills
