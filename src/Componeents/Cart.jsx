/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react'
import "./Cart.css"
import { useContext } from 'react';
import { cartContext } from '../App';
export const Cart = () => {
  const {cart}= useContext(cartContext)
  const [Total,setToatal]= useState(0);
  useEffect(()=>{
    setToatal(cart.reduce((acc,curr)=>acc+parseInt(curr.price),0))
  },[cart])
  return (
   <>
   <h1 className='cart-heading'>Cart Products</h1>
    <div className='cart-container'>
   
   {cart.map((product)=>(
     <div className="cart-products" key={product.id}>
     <div className="img">
       <img src={product.images} alt=''></img>
     </div>
     <div className="cart-product-details">
       <h3>{product.title}</h3>
       <price>Price Rs:{product.price}</price>
     </div>
   </div>
   ))}
    </div>
    <h1 className='cart-amt'>Total Amount:{Total}</h1>
   </>
  )
}
