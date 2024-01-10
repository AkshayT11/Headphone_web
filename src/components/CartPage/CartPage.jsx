import React, { useState } from "react";
import "./cartpage.css";
import { IoCloseOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "../../redux/slices/CartSlice";


const CartPage = () => {
   const dispatch = useDispatch();

    const [activeCart, setActiveCart] = useState(false);

    const cartItems = useSelector((state)=> state.cart.cart)
    console.log(cartItems);

    // total qty amount
    const totalQty = cartItems.reduce((acc, item)=> acc + item.qty, 0 )

    // Total Price
    const totalPrice = cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0 )

  

  return (
    <div className={ activeCart ? "cartMain" : "toggleCart"}>
      <div className="cartPage">
        <div className="cartHeader">
          <h2>My Order</h2>
          <IoCloseOutline onClick={()=> setActiveCart(!activeCart) } className="cart_close" />
        </div>
        {/* Item Card */}

        { cartItems.length > 0 ?  cartItems.map((item)=> {
          const { id,img, name,price,qty} = item;

            return (
                <div key={id}  className="itemCard">
                <img
                  src= {img}
                />
      
                <div className="itemInfo">
                  <h2>  {name.slice(0,15)}</h2>
                  <span className="itemInfo_price">₹ {price} </span>
                  <div className="itemIcons">
                    <FaPlus onClick={()=> dispatch(incrementQty({id})) } className="icons" />
                    <span>{qty} </span>
                    <FiMinus onClick={()=> qty > 1 ? dispatch(decrementQty({id})) : qty = 0 } className="icons" /> 
                    <MdDelete onClick={()=> dispatch(removeFromCart({
                       id:id,
                       qty:1,
                       img: item.img,
                       name:item.name,
                       price:item.price,
                    })) } className="deleteIcon"/>
                  </div>
                </div>
              </div>
            )
         } ): <h2>The Cart is Empty</h2>  }

        

        <div className="checkOut">
          <h3>Items: {totalQty} </h3>
          <h3>Total Amount: {totalPrice} </h3>
          <button  className="checkOut_btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
