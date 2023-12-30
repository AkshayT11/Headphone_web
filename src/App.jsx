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
      <Home/>
      <About/>
      <Features/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App