import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';

const cors = require('cors');

app.use(cors({
    origin: ['https://window-shop-admin.onrender.com'], // Allow your admin domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // If dealing with cookies or authorization headers
}));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    
     <App />
  </ShopContextProvider>
   
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
