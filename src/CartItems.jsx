import React from 'react';
import { ShopContext } from './shop_context';
import { useContext } from 'react';

export const CartItems = (props) => {
    let { id,productName,productImage,price} = props.data;
    const { addToCart,setCartItems,cartItems,removeFromCart,totalCartAmount } = useContext(ShopContext);
  return (
    <div className='mx-3'>
        <img src={productImage} alt="" height="200px"/>
         <p>{price}</p>
         <p>{productName}</p>
         <button className = "mx-3 my-3"onClick={()=>{addToCart(id)}}> +</button>
         {cartItems[id]} 
         <button className = "mx-3 my-3" onClick={()=>{removeFromCart(id)}}>-</button>
      
    </div>
  )
}
