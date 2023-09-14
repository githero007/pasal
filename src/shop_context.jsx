import  React, {createContext,useState} from 'react'
import { PRODUCTS } from './Products';
export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
  let cart = {};
  for ( let i = 1; i < PRODUCTS.length+1;i++){
     cart[i] = 0; 
  }
  return cart;

}

export const ShopContextProvider = (props) => {
  const[cartItems,setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId] : prev[itemId]+1}))
   }
    const removeFromCart = (itemId)=>{
      setCartItems((prev)=>({...prev,[itemId] : prev[itemId]-1}))
    
    }
    const totalCartAmount = ()=>{
      let totalAmount = 0;
      for ( const  items in cartItems)
      {
        if (cartItems[items]>0)
        {
          let itemInfo = PRODUCTS.find((product)=> product.id === Number(items)
          )
          totalAmount += cartItems[items] *itemInfo.price;
        }
      }
      return totalAmount;
    }
  const contextValue = {cartItems,addToCart,removeFromCart,setCartItems,totalCartAmount}
  console.log(cartItems);
return (
  <ShopContext.Provider value = {contextValue}  >
    {props.children}
    </ShopContext.Provider>)
  
}