import React from 'react'
import './Services.css'
import { FaCode } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BiSolidPaint } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { IoCameraOutline } from "react-icons/io5";


const Skills = () => {
  return (
    <div className='body2'>
      <h1 className='heading'>My <span style={{color:'aqua'}}>Services</span></h1>
      <div className='services-container'>
        <div className='services-box'>
          <div className="icon">
            <i><FaCode /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Web Development</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div>

        <div className='services-box'>
          <div className="icon">
            <i><BiSolidPaint /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>UI/UX Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div>

        <div className='services-box'>
          <div className="icon">
            <i><IoColorPaletteOutline /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div>
      </div>
      <div className='services-container1'>
        <div className='services-box'>
          <div className="icon">
            <i><RiSlideshow3Line /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Vedio Editing</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div>

        <div className='services-box'>
          <div className="icon">
            <i><IoCameraOutline /></i>
            <a href=""><i><FaArrowLeft /></i></a>
          </div>
          <h3>Photography</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor repudiandae, quaerat qui ad minus nostrum explicabo architecto magnam autem voluptatibus laudantium itaque mollitia. Nostrum voluptatem iure vitae debitis, aliquid reprehenderit!</p>
        </div>

      </div>
    </div>
  )
}

export default Skills
