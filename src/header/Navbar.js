
import React from 'react';
import './Nave.css';
import logo from './rf-high-resolution-logo-color-on-transparent-background.png';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <React.Fragment>
      <MediaQuery minDeviceWidth={1224}>
        <div className='Nav-menu'>
          <div className='logo'>
            <Link to='/'><img className='imglogo' src={logo} alt="logo"></img></Link>
          </div>
          <div className='devi-menu'>
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/About'> <li>About</li></Link>
              <Link> <li>Contact</li></Link>
              <Link to='/Help'><li>Help</li></Link>
              <Link to='signin'><li>Sign up/Login</li></Link>
            </ul>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1224}>
        <nav className="navigation">
          <div className='logo'>
            <Link to='/'><img className='imglogo' src={logo} alt="logo"></img></Link>
            <button className="hamburger"  onClick={() => {setIsNavExpanded(!isNavExpanded)}}><FaEllipsisV/></button>
          </div>
          <div className="navigation-menu">
            <ul>
              <Link to='/'><li>Home</li></Link>
              <Link to='/About'> <li>About</li></Link>
              <Link> <li>Contact</li></Link>
              <Link to='/Help'><li>Help</li></Link>
            </ul>
          </div>
        </nav>
      </MediaQuery>

    </React.Fragment>
  );
}


export default Navbar;