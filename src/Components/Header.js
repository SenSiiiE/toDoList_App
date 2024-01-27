import React from 'react'
import './../App.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
    
    <nav>
      Get Ready to Complete Your Daily Goals
    </nav>
    <div className='header'>
      <Link to = "/">Home</Link>
      <Link to = "/about">About</Link>
      <Link to = "/contact">Contact</Link>
    </div>
    
    </>
    )
}

export default Header;
