import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Features from './components/Features/Features'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
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
      </main>
     
    </div>
  )
}

export default App