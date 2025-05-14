import React, { useState } from "react";
import './works.css'

const slides = [
  {
    image: "https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/child-1_d8uugm.jpg",
    text: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex amet, quaerat tempora provident obcaecati dolorem minus atque accusantium aut repudiandae soluta. Culpa sit necessitatibus accusamus reprehenderit iure odit placeat deleniti!</p>
  },
  {
    image: "https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/d3_inwcgn.jpg",
    text: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex amet, quaerat tempora provident obcaecati dolorem minus atque accusantium aut repudiandae soluta. Culpa sit necessitatibus accusamus reprehenderit iure odit placeat deleniti!</p>
  },
  {
    image: "https://res.cloudinary.com/dwko0nqi4/image/upload/v1744455880/p8_m4s8s5.jpg",
    text: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex amet, quaerat tempora provident obcaecati dolorem minus atque accusantium aut repudiandae soluta. Culpa sit necessitatibus accusamus reprehenderit iure odit placeat deleniti!</p>
  }
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <div style={styles.carousel} className="body1">
      <h1 className="works">My <span style={{color:'aqua'}}>Works</span></h1>
      <div className="container3">
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
        
       
        <div className="left2">
          <p style={styles.caption}>{slides[currentIndex].text}</p>
        </div>
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
