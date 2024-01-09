import React from 'react'
import "./products.css"
import HeadphoneData from '../../data/HeadphoneData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/CartSlice';


const Products = () => {
    const dispatch = useDispatch();

  return (
    <div className='products_main'>
         <div className="products_content">
            <h1>Our Products</h1>
            <p>If you buy from our Website , you will get 10% flat discount. so hurry up!!</p>    
        </div>  
         <div className="products_cards">
            {HeadphoneData.map((item)=> {
                return (
                    <div key={item.id} id={item.id}  className="prod_card">
                        <img src= {item.img} alt="prod" />
                        <h2>{item.name} </h2>
                        <p>Price:₹ {item.price}</p>
                        <button onClick={() => dispatch(addToCart({
                            id:item.id,
                            qty:1,
                            img: item.img,
                            name:item.name,
                            price:item.price,
                        } ))} className='prod_btn'>Add To Cart</button>
                    </div>
                )
            } )}

            
            {/* <div className="prod_card">
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
            </div> */}
        </div>

    </div>
  )
}

export default Products