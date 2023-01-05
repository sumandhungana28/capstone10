import React from 'react';
import "./nav.css";

function Nav() {
  return (
    <div className='nav1'>
    <div> <img src="logo.png" alt="logo" height={150} width={150} /></div>
    <ul className='container2'>
      <li>
        <a href="#">Home</a>
      </li>

      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Menu</a>
      </li>
    
      <li>
        <a href="#">Reservation</a>
      </li>
    
      <li>
        <a href="#">Order Online</a>
      </li>
    
      <li>
        <a href="#">Log In</a>
      </li>
    </ul>
    </div>
  )
}

export default Nav;