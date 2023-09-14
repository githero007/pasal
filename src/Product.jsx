import React from 'react';
import { ShopContext } from './shop_context';
import { useContext } from 'react';
import './product.css'

import { useNavigate } from 'react-router-dom';


export const Product = (props) => {
    const {id,productName,productImage,price,description} = props.data;
    const { addToCart,setCartItems,cartItems } = useContext(ShopContext);
    let cartItemsAmount = cartItems[id];
   const move = useNavigate();

  return (<div>
    <div className="productInfo mx-3 my-3 ">
      <img src = {productImage} height = "200px" width = "290px"/>
      <div className="description">
        <p>{id}</p>
        <p>{productName}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
     <button type = "button"  className=" btn btn-secondary" onClick = {()=>addToCart(id)}>Add this item to cart  ({cartItemsAmount})</button>
     
    </div>
  
    </div>
  )
}
