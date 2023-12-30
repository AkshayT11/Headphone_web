import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='home'>
        <div className="content">
            <h2>discover next level <br />audio experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eligendi aut at autem, vitae quidem quo nisi quibusdam alias voluptate tempora dolore adipisci repellat obcaecati?</p>
            <button className='home-btn'>Order Now</button>
        </div>
        <div className="home_img">
            <img src="https://rukminim2.flixcart.com/image/416/416/l0fm07k0/headphone/q/u/y/rockerz-650-boat-original-imagc85zyhznb27v.jpeg?q=70" alt="pic1" />
        </div>
    </div>
  )
}

export default Home