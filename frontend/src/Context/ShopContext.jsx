import React, { createContext, useEffect } from "react";
// import all_product from "../Components/Assets/all_product"
import { useState } from "react";
// import Product from "../Pages/Product";

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index=0;index< 300+1 ;index++){
        cart[index]=0;
    }
    return cart;
    }







const ShopContextProvider = (props) => {
    
    const [all_product,setAll_Product] = useState([]);
//http://localhost:4000/allproducts
        useEffect(()=>{
            fetch("https://window-shop-backend.onrender.com/allproducts")
            .then((response)=>response.json())
            .then((data)=>setAll_Product(data))
//http://localhost:4000/getcart
            if(localStorage.getItem('auth-token')){
                fetch("https://window-shop-backend.onrender.com/getcart",{
                    method:'POST',
                    headers:{
                        Accept:'application/json',//form-data
                        'auth-token' :`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json',

                    },
                    body:JSON.stringify({}) ,//"",

                }).then((response)=>response.json())
                .then((data)=>setCartItems(data));
            }
        },[])
    const [cartItems,setCartItems] = useState(getDefaultCart());
   

   const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    if(localStorage.getItem('auth-token')){
        //http://localhost:4000/addtocart
        fetch("https://window-shop-backend.onrender.com/addtocart",{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
   }

   const removeFromCart = (itemId )=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    if(localStorage.getItem('auth-token')){
        //http://localhost:4000/removefromcart
        fetch("https://window-shop-backend.onrender.com/removefromcart",{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'auth-token':`${localStorage.getItem('auth-token')}`,
                'Content-Type':'application/json',
            },
            body:JSON.stringify({"itemId":itemId}),
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
    }
   }

   const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for (const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let itemInfo = all_product.find((Product)=>Product.id===Number(item))
            totalAmount += itemInfo.new_price * cartItems[item];
        }
       
    }
    return totalAmount;
   };

   const getTotalCartItems = () =>
   {
    let totalItem = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0){
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
   }

   const contextValue ={ getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;                 
