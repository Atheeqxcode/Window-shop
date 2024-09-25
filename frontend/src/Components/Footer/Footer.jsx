import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>WINDOW SHOPPING</p>

      </div>

      <ul className="footer-links">

        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
        <a href="https://www.instagram.com/_disaster_017/" target="_blank" rel="noopener noreferrer">
    <img src={instagram_icon} alt="Instagram" />
</a>
        </div>
        <div className="footer-icons-container">
        <a href="https://www.instagram.com/_disaster_017/" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp_icon} alt="" />
            </a>
        </div>

       

      </div>

      <div className="footer-copyright">
        <hr />

<p>Copyright - Atheeq @2024 - All Rights Reserved</p>      </div>
    </div>
  )
}
