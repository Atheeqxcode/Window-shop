import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to keep Updates</p>
      <div>
        <input type="email" placeholder='Your Email' aria-label='Email' />
        <button type="button">Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;



