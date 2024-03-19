/* eslint-disable react/prop-types */
import { useContext } from 'react'
import "./product.css"
import { cartContext } from '../App';



export const Product = ({product}) => {
const {cart,setcart}= useContext(cartContext)
  const name =product.title.length>21 ? product.title.substring(0,20)+"..." : product.title;
 
  const addCart=()=>{
    setcart([...cart,product])
    console.log(...cart,product)

  }
 const removeCart=()=>{
    setcart(cart.filter((c)=>c.id !== product.id))
  }
  return (
    <div className='product'>
       <div className="img">
        <img src={product.images} alt={product.title}></img>
       </div>
       <div className="details">
       <h3>{name}</h3>
        <p>price RS:{product.price}</p>
        {cart.includes(product)?(
          <button className='btnremove' onClick={removeCart}>remove from cart</button>
        ):(<button onClick={addCart}>Add to Cart</button>)}
        
       </div>    
    </div>
  )
}
