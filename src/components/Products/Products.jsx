import React from 'react'
import "./products.css"

const Products = () => {
  return (
    <div className='products_main'>
         <div className="products_content">
            <h1>Our Products</h1>
            <p>If you buy from our Website , you will get 10% flat discount. so hurry up!!</p>    
        </div>  
         <div className="products_cards">
            <div className="prod_card">
                <img src="https://m.media-amazon.com/images/I/618Z0eTNM6L._SL1500_.jpg" alt="prod1" />
                <h2>ZEBRONICS Zeb-Thunder PRO</h2>
                <p>Price:₹ 999</p>
                <button className='prod_btn'>Buy Now</button>
            </div>
            <div className="prod_card">
                <img src="https://m.media-amazon.com/images/I/41OqfZr+lfL._SY300_SX300_.jpg" alt="prod1" />
                <h2>Zebronics-Bang over the ear headphones with Foldable Design </h2>
                <p>Price:₹ 699</p>
                <button className='prod_btn'>Buy Now</button>
            </div>
            <div className="prod_card">
                <img src="https://m.media-amazon.com/images/I/41K2Mbfo1mL._SX300_SY300_QL70_FMwebp_.jpg" alt="prod1" />
                <h2>Zebronics Thunder 60 hrs Playback time Bluetooth Wireless</h2>
                <p>Price:₹ 799</p>
                <button className='prod_btn'>Buy Now</button>
            </div>
            <div className="prod_card">
                <img src="https://m.media-amazon.com/images/I/315vj6oj-FL._SX300_SY300_QL70_FMwebp_.jpg" alt="prod1" />
                <h2>boAt Rockerz 450 Bluetooth On Ear Headphones with Mic</h2>
                <p>Price:₹ 1699</p>
                <button className='prod_btn'>Buy Now</button>
            </div>
        </div>

    </div>
  )
}

export default Products