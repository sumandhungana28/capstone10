
import React from "react";
import "./nav.css";
import Home from "./Home";
import Order from "./Order";
import Menu from "./Menu";
import About from "./About";
import Reservation from "./Reservation";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function Nav() {
  return (
   
    
    <Router>
<>

<nav className="nav1">
 <img src="logo.png" alt="logo" height={150} width={150} />
    <ul className='ul'>
   
    <li>
    <Link to="/" >Home</Link>
      </li>
      <li>
      <Link to="/about" >About</Link>
      </li>
      <li className="menu">
      <Link to="/menu" >Menu</Link>
      </li>
    
      <li>
      <Link to="/reservation" >Reservation</Link>
      </li>
    
      <li>
      <Link to="/order" >Order Online</Link>
      </li>

      
    </ul>
    </nav>
    <Routes>
        <Route  path="/about" element={<About />} />
          
          
        <Route path="/menu" element={<Menu />} />
            
          
       <Route path="/" element={<Home />} />
            
        <Route path="/reservation"  element={<Reservation />} />

       <Route path="/order"  element={<Order />} />

      
            
          
        </Routes>
        </>
    </Router>
    
    
  )
}

export default Nav;
