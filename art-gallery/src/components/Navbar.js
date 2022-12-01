import React from 'react';
import '../App';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
        <h1>The Art Gallery App</h1>
        </div>
        <div className='rightSide'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/work'>Our Work</Link>
            <Link to='/contact'>Contact Us</Link>
        </div>
    </div>
  );
}

export default Navbar
