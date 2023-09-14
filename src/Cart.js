import React from 'react'
import { ShopContext } from './shop_context';
import { useContext } from 'react';
import { PRODUCTS } from './Products';
import { CartItems } from './CartItems';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const navigate = useNavigate();
  const { addToCart,setCartItems,cartItems,removeFromCart,totalCartAmount } = useContext(ShopContext);
  const  total = totalCartAmount();
  return (
    <div className='cart'>
      <h2> Items in the cart</h2>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0)
        {
           return    <CartItems data = {product}/>
        }     
         }
        )
        }
      </div>
      <p>Subtotal : {total}</p>
      <button type="button" class="btn btn-dark" onClick={ ()=>navigate("/") }>Continue Shopping</button>

    </div>
  )
}
