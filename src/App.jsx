import React from 'react'
import  "./routing/home"
import Home from './routing/home'
import './App.css'
import Navbar from './components/Navbar'
import About from './routing/About'
import Works from './routing/Works'
import Services from './routing/Services'
import Contact from './routing/Contact'


const App = () => {


  return (
    
    <div className='body'>
      
      <Navbar />
      <section id='home' className='content'>
        <Home />
      </section>
      <section id='about' className='content'>
        <About />
      </section>
      <section id='works' className='content'>
        <Works />
      </section>
      <section id='services' className='content'>
        <Services />
      </section>
      <section id='contact' className='content'>
        <Contact />
      </section>
    </div>
    
  )
}

export default App