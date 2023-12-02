import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import About from '../About/About';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src="https://cdn-icons-png.flaticon.com/128/2737/2737448.png" alt="" /></Link>
      </div>
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/introduction">Introduction</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
