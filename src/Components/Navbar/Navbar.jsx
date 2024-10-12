import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/images/logo.jpg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img width={'100px'} src={Logo} alt="Logo" />
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={isOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="products" onClick={() => setIsOpen(false)}>Products</Link>
          </li>
          <li>
            <Link to="contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
      <br />
      <br />
      <br />
    </div>
  );
};
