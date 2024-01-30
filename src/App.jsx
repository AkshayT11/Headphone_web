import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Features from './components/Features/Features'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'
import CartPage from './components/CartPage/CartPage'

const App = () => {

  const [activeCart, setActiveCart] = useState(false);
  return (
    <div className='main'>
      <Navbar activeCart={activeCart} setActiveCart={setActiveCart} />
      <main>
        <div id="Home">
        <Home/>
        </div>

        <div id="About">
        <About/> 
        </div>

        <div id="Features">
        <Features/>
        </div>

        <div id="Products">
        <Products/>
        </div>

        <div id="Footer">
        <Footer/>
        </div>  

        
      <CartPage activeCart={activeCart} setActiveCart={setActiveCart} />
      </main>
     
    </div>
  )
}

export default App