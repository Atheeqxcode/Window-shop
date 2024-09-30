import React, { useEffect, useState } from 'react'
import './Popular.css'
// import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([]);
 useEffect(()=>{
   //http://localhost:4000/popularinwomen
fetch('https://window-shop-backend.onrender.com/women')
.then((response)=>response.json())
.then((data)=>setPopularProducts(data));
 },[])
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMENS</h1>
        <hr/>
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default Popular
