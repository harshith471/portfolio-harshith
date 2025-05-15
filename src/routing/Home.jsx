import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Home.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";



const home = () => {
  

  useScrollReveal();

  

  const [text] = useTypewriter({
    words: ['Developer', 'Designer', 'Photographer' ],
    loop: {},
    typeSpeed:180,
    delaySpeed:100
  });
  return (
    <div className='body'>
      <div className='container'>
        <div className='left'>
          <h1 className='reveal-left'>
          Hi,<br></br>This is <span style={{fontWeight:'bold', color:'aqua', fontSize:'70px'}}>Harshith</span> 
        </h1>
        <h2 className='reveal-left'>I'm a 
          <span  style={{fontWeight:'bold', color:'aqua', marginLeft:'20px'}}>
            {text}
          </span>
          <Cursor />  
        </h2>
        <div className='media reveal-child'>
          <button onClick={() => window.open("https://res.cloudinary.com/dwko0nqi4/image/upload/v1744475326/harshith1_cv1_page-0001_umeb9w.jpg", "download")}>
              Download CV
          </button>

          <a className='social reveal-child' href='https://www.linkedin.com/in/donthamsetty-jaya-satya-sai-harshith-b227b3286' ><FaLinkedinIn /></a>
          <a className='social reveal-child' href='https://www.facebook.com/share/1FdyFF8gDv/' ><FaFacebookF /></a>
          <a className='social reveal-child' href='https://www.instagram.com/itz__harshith____?igsh=MTNqd2ExZDR6amp6dg==' ><FaInstagram /></a>
        </div>
        </div>
        
        <div className='right reveal-right'>
           <img src='https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit216_qaahuz.png' className='image'></img>
        </div>
       
      </div>
      
    </div>
  )
}

export default home
