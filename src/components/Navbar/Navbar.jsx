import React, { useState } from 'react'
import "./navbar.css"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BsCart } from "react-icons/bs";





const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)

  return (
    <div className='nav_main'>
        <nav>
            <div className="logo">
               <h1>BeatBox Headphones</h1> 
            </div>
            <ul className= {isMobile ? "nav-link-mobile" : "nav-links"}>
              
                  <li>
                  <a href="#Home">
                  Home
                  </a> 
                </li>
                 
                <li>
                  <a href="#About">
                  About
                  </a>
                  </li>
                                   
                
                <li>
                  <a href="#Features">
                  Features
                  </a>                  
                  </li>
                   
                <li>
                   <a href="#Products">
                  Product
                  </a>
                  </li>

                 

                <li>
                  <a href="#Footer">
                  Contact
                  </a>
                  </li>

                  
                  
            </ul>
            <div className="menu" onClick={()=>  setIsMobile(!isMobile)}>
            { isMobile ? <IoMdClose /> : <IoMenu />}
            </div>
            {/* Cart Icon */}
            <div className='cart' >
            <BsCart />
            </div>
        </nav>
    </div>
  )
}

export default Navbar