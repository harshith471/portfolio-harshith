import React, { useState } from "react";
import './works.css'
import useScrollReveal from '../hooks/useScrollReveal';
import { Bounce, Fade, Flip, Hinge, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";

const slides = [
  {
    image: "https://res.cloudinary.com/dwko0nqi4/image/upload/v1747319325/frontend1_s7r7ui.jpg",
    text: <div className="text">
      <h1 className="head1">1.Frontend Project</h1>
      <h2 className="head2">Company Portfolio Website</h2>
    <p  className="para1">A clean and professional company portfolio website designed to showcase services, completed projects, and contact information for potential clients. Built as a responsive template suitable for startups, agencies, and small businesses.</p>
    <ul className="list">
      <li><span style={{fontWeight:'bold', color:'aqua'}}>Role: </span> Full-stack Developer & Designer</li><br />
      <li><span style={{fontWeight:'bold', color:'aqua'}}>Tech Stack: </span> HTML, CSS, JavaScript, GitHub Pages</li><br />
      <li><span style={{fontWeight:'bold', color:'aqua'}}>Features: </span> <br /> Responsive layout for all screen sizes <br></br>Smooth scrolling and section-based navigation

<br />Dedicated sections for About, Services, Portfolio, and Contact

<br />Clean UI with modern design principles

</li>
</ul>
    
    </div>
  },
  {
    image: "https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/child-1_d8uugm.jpg",
    text:<div className="text">
      <h1 className="head1">2.Poster</h1>
      <h2 className="head2">Greeting poster Design</h2>
    <p className="para1">Created a colorful and joyful digital poster for Panacea IT Services to celebrate Children’s Day. The design features a lively animated child and playful elements to evoke the spirit of childhood. </p>
    <ul className="list">
      <li><span style={{fontWeight:'bold', color:'aqua'}}>Role: </span> Designer</li><br />
      <li><span style={{fontWeight:'bold', color:'aqua'}}>Tech Stack: </span> Adobe Photoshop </li><br />
      <li><span style={{fontWeight:'bold', color:'aqua'}}>About services: </span> <br /> I offer creative and tailored design solutions that effectively communicate your message and engage your target audience. From concept development to final execution, I focus on combining aesthetics with functionality. 
</li>
</ul>
    
    </div>
  },
  {
    image: "https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/p8_m4s8s5.jpg",
    text:<div className="text">
      <h1 className="head1">3.Poster</h1>
      <h2 className="head2">Advertisement Design</h2>
    <p className="para1">The company describes itself as having profound knowledge and extensive experience in web and mobile app development, delivering solutions for various industries like automotive, advertising, motion picture & video, consulting, retail, legal, and more.</p>
    <ul className="list">
      <li><span style={{fontWeight:'bold', color:'aqua'}}>Role: </span> Designer</li><br />
      <li><span style={{fontWeight:'bold', color:'aqua'}}>Tech Stack: </span> Adobe Photoshop </li><br />
      <li><span style={{fontWeight:'bold', color:'aqua'}}>About service: </span> <br /> I offer creative and tailored design solutions that effectively communicate your message and engage your target audience. From concept development to final execution, I focus on combining aesthetics with functionality. 

</li>
</ul>
    
    </div>
  }
];

export default function ImageCarousel() {

  
  useScrollReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <div style={styles.carousel} className="body1 ">
      <Fade direction="down" fraction={0.3} triggerOnce>
      <h1 className="works">My <span style={{color:'aqua'}}>Works</span></h1>
      </Fade>
      <div className="container3">
        <Fade direction="left" fraction={0.5} triggerOnce>
        <div className="right2">
           <div style={styles.imageWrapper}>
        
          <img
            src={slides[currentIndex].image}
            alt="slide"
            style={styles.image}
          />
          <button style={{ ...styles.arrow, left: 10 }} onClick={goPrev}>
          &#10094;
          </button>
          <button style={{ ...styles.arrow, right: 10 }} onClick={goNext}>
            &#10095;
          </button>
          </div>

        </div>
        </Fade>
        <Fade direction="right" fraction={0.5} triggerOnce>
        <div className="left2">
          <p style={styles.caption}>{slides[currentIndex].text}</p>
        </div>
        </Fade>
      </div>
      
    </div>
    </>
  )
}

const styles = {
  carousel: {
    
    textAlign: "center",
    fontFamily: "sans-serif"
  },
  imageWrapper: {
    position: "relative"
  },
  image: {
    width: "60%",
    borderRadius: "8px"
  },
  arrow: {
    position: "absolute",
    top: "100%",
    transform: "translateY(-50%)",
    backgroundColor: "aqua",
    color: "#fff",
    border: "none",
    fontSize: "24px",
    padding: "20px",
    cursor: "pointer",
    borderRadius: "40%"
  },
  caption: {
    marginTop: "12px",
    fontSize: "18px",
    color: "white"
  }
};
