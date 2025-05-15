import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './About.css'
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom, Reveal } from "react-awesome-reveal";
import { keyframes } from '@emotion/react';

const About = () => {
  const customSlide = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px); /* <- distance */
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

  useScrollReveal();

  const [text] = useTypewriter({
      words: ['DONTHAMSETTY JAYA SATYA SAI HARSHITH'],
      typeSpeed:80,
  })
  return (
    <div className='body'>
      <Fade direction='down' fraction={0.3} triggerOnce>
      <h1 className='heading'>About <span style={{color:'aqua'}}>Me</span></h1>
      </Fade>
      <div className='container2'>
        
        <div className='left1'>
          <Zoom triggerOnce='false' fraction={0.5}>
          <img src='https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit225_oerkco.png' className='image'></img>
          </Zoom>
        </div> 
          
        <Reveal keyframes={customSlide} duration={1000} fraction={0.5} triggerOnce>
          <div className='right1 ' >
        
          <h1 className='name'>
            <span style={{fontWeight:'bold', color:'aqua'}}>
                      {text}
                    </span>
                    
                    </h1>
          
          <p className='para'>
            Hi everyone! My name is Harshith, and I’m currently a fourth-year ECE student. I’ve always been fascinated by how technology works, and over the past year, I’ve been focusing a lot on learning HTML, CSS, and Javascript. I really enjoy solving programming challenges — especially ones that involve logic, pattern matching, or algorithms. Apart from coding, I love in Photography, Editing and Graphic Designing. As all of these I am using Photoshop, Premiere Pro, Adobe Illustrator and Figma. I’m always learning, experimenting, and pushing creative boundaries. Let’s create something beautiful together!
          </p>

        </div>
        </Reveal>
        
        

      </div>
      
    </div>
  )
}

export default About
