import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
   <footer>
      <div className="foot_links">
        <div className="foot_logo">
            <h1>BeatBox</h1>
            <p>an Indian audio engineer and loudspeaker designer best known for establishing two audio companies that bear his name . its one of the fastest growing headphone and sound company.</p>
        </div>
      
            <ul>
               <h2>Links</h2>
                <li>About</li>
                <li>Features</li>
                <li>Product</li>
            </ul>
            <ul>
              <h2>Features</h2>
                <li>User Friendly</li>
                <li>Latest Technology</li>
            </ul>
            <ul>
               <h2>Contact Us</h2>
                <li>beatbox@email.com</li>
                <li>+919295445544</li>

            </ul>

       
      </div>
      <p className='rights'>@Copyright and developed by Akshay Telawade all right reserved</p>
   </footer>
  )
}

export default Footer