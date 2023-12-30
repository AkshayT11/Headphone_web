import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='about_main'>
          <div className="about_img">
               <img src="https://rukminim2.flixcart.com/image/416/416/kzd147k0/headphone/g/0/d/sh12-stereo-over-ear-headphones-with-mic-headset-adjustable-mic-original-imaffdbzuze6mdhq.jpeg?q=70" alt="pic2" /> 
            </div>  
            <div className="about_contents">
                <h1>About Products</h1>
                <h2>Experience audio redefine. our headsets deliver quality, comfort and style in every note.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, porro. Ab laboriosam, omnis laborum itaque dolore totam! Ad vel odio non laborum fugiat, minima, blanditiis laudantium tenetur velit possimus reiciendis.</p>
                <ul className='about_links'>
                    <li>Wireless Headphones</li>
                    <li>High Quality Sounds</li>
                    <li>Voice Call Facility</li>
                    <li>Nice and Soft Design</li>
                    
                </ul>
            </div>
    </div>
  )
}

export default About