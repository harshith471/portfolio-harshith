import React from 'react'
import './Home.css'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTypewriter, Cursor } from 'react-simple-typewriter';


const home = () => {
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
          <h1>
          Hi,<br></br>This is <span style={{fontWeight:'bold', color:'aqua', fontSize:'70px'}}>Harshithhhhhhh</span> 
        </h1>
        <h2>I'm a 
          <span style={{fontWeight:'bold', color:'aqua', marginLeft:'20px'}}>
            {text}
          </span>
          <Cursor />  
        </h2>
        <div className='media'>
          <button>Download CV</button>
          <a className='social'><FaLinkedinIn /></a>
          <a className='social'><FaFacebookF /></a>
          <a className='social'><FaInstagram /></a>
        </div>
        </div>
        
        <div className='right'>
           <img src='https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit216_qaahuz.png' className='image'></img>
        </div>
       
      </div>
      
    </div>
  )
}

export default home
