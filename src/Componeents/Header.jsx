import React from 'react'
import {Link} from "react-router-dom";
import "../header.css"
import { useContext } from 'react';
import { cartContext } from '../App';
export const Header = () => {
  const {cart}= useContext(cartContext)
  return (
    <div className='navbar'>
        <div className='logo'>Food Cart</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Cart"}><span className='cart-count'>{cart.length}</span>View cart</Link>
            </li>
        </ul>
    </div>
  )
}
