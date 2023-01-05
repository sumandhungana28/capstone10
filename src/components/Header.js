import React from 'react';
import  "./header.css";
function Header() {
  return (
    
    <div className='container1'>
    <div className='text1'>
    <h1>Little Lemon</h1>
    <p>This is the best fusion restaurant in town</p>
    <button>Book Table</button>
    </div>
    <div className='img1'>
    <img src="logo.png" alt="logo" height={150} width={150} />
    </div>
    </div>
    
    
  )
}

export default Header;