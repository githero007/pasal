import React from 'react'
import  {PRODUCTS} from './Products'
import {Product} from './Product'
export const Shop = () => {
  return (
    <div className="shop">
        <div className="shopname">
            <h2> Pasal</h2>
        </div>
        <div className="products ">{PRODUCTS.map( (product)=>
     (
        <Product key = {product.id }data  = {product}/>
     )
        )}</div>
    </div>
  )
}
