
import React from 'react';
import './Nave.css';
import Container from '../maincontent/container';
import { restaurants } from '../maincontent/constants';
import { useState } from 'react';


const Navbar = () => {
  
  return (
    <div className='Nav-menu'>
      <a href='home' className='logo'>ROZA FOODS</a>
      <div className='devi-menu'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href='/login'>Sign in</a></li>
        </ul>


      </div>

      <div className='divider'></div>
    </div>

  );
}


export default Navbar;