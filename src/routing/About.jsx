import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './About.css'

const About = () => {

  const [text] = useTypewriter({
      words: ['DONTHAMSETTY JAYA SATYA SAI HARSHITH'],
      typeSpeed:80,
  })
  return (
    <div className='body'>
      <h1 className='heading'>About <span style={{color:'aqua'}}>Me</span></h1>
      <div className='container2'>
        
        <div className='left1'>
          <img src='https://res.cloudinary.com/dwko0nqi4/image/upload/v1746891353/edit225_oerkco.png' className='image'></img>
        </div> 
        <div className='right1'>
          <h1 className='name'>
            <span style={{fontWeight:'bold', color:'aqua'}}>
                      {text}
                    </span>
                    
                    </h1>
          <p className='para'>
            Hi everyone! My name is Harshith, and I’m currently a fourth-year ECE student. I’ve always been fascinated by how technology works, and over the past year, I’ve been focusing a lot on learning HTML, CSS, and Javascript. I really enjoy solving programming challenges — especially ones that involve logic, pattern matching, or algorithms. Apart from coding, I love in Photography, Editing and Graphic Designing. As all of these I am using Photoshop, Premiere Pro, Adobe Illustrator and Figma. I’m always learning, experimenting, and pushing creative boundaries. Let’s create something beautiful together!
          </p>

        </div>

      </div>
      
    </div>
  )
}

export default About
