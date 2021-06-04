import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";


const Navigation = () => {
    const navStyle = {
        color: 'white'
    }
  return (
    <nav>
      <h3>logo</h3>
      <ul className="navLinks">
        <Link style={navStyle} to='/'>
          <li>Home</li>
        </Link>
        <Link style={navStyle} to='/About'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='Contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
