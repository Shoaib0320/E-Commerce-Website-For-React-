// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css'

// export const Navbar = () => {
//   return (
//     <div>
//         <ul>
//             <li>
//                 <Link to='/'>Home</Link>
//             </li>

//             <li>
//                 <Link to='about'>About</Link>
//             </li>

//             <li>
//                 <Link to='products'>Products</Link>
//             </li>

//             <li>
//                 <Link to='contact'>Contact</Link>
//             </li>
//         </ul>

//         <br /><br /><br />
//     </div>
//   )
// }

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
          <Link to="/">            
                <img width={'100px'} src={Logo} alt="Logo" />
          </Link>
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
