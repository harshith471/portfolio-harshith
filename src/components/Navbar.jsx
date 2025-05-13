import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { HiOutlineXMark } from "react-icons/hi2";
import { BiColor } from 'react-icons/bi';


const Navbar = () => { 
  
  const [isOpen, setIsOpen ] = useState(false);
  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  } 
  const showSidebar = () => setIsOpen(!isOpen);

  

  return (
    <div className='body'>
      <header className='navbar'>
        <a className='logo'>PORTFOLIO</a>
        <ul className={isOpen ? "navlist active" : "navlist"} onClick={showSidebar}>
          <li><a href='#home' className='nav-link '>Home</a> </li>
          <li><a href='#about' className='nav-link'>About</a> </li>
          <li><a href='#works' className='nav-link'>Works</a> </li>
          <li><a href='#services' className='nav-link'>Services</a> </li>
          <li><a href='#contact' className='nav-link'>Contact</a> </li>
        </ul>
        <div className='menu-bar ' id='menu-icon' onClick={toggleMenu} >
        <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
      

    </div>
  )
}

export default Navbar
