import React, { useState } from 'react'
import "./navbar.css"
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";



const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false)

  return (
    <div className='nav_main'>
        <nav>
            <div className="logo">
               <h1>BeatBox</h1> 
            </div>
            <ul className= {isMobile ? "nav-link-mobile" : "nav-links"}>
                <li>Home</li>
                <li>About</li>
                <li>Features</li>
                <li>Product</li>
                <li>Contact</li>
            </ul>
            <div className="menu" onClick={()=>  setIsMobile(!isMobile)}>
            { isMobile ? <IoMdClose /> : <IoMenu />}
            </div>
        </nav>
    </div>
  )
}

export default Navbar