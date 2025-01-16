/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css';


const Footer = () => {


  const handleScroll =()=>{
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h1 id='logoName'>Game Community</h1>
          <p> 2025 Game Community. This is our assignment for the impact training.Developed using MERN stack.Developed by Saurabh, Ram, Prashant and Khushang.</p>
        </div>
        <div className='footer-right'>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/" onClick={handleScroll}>Home</Link></li>
                <li><Link to="/games" onClick={handleScroll}>Games</Link></li>
                <li><Link to="/blogs" onClick={handleScroll}>Blog</Link></li>
                <li><Link to="/community" onClick={handleScroll}>Community</Link></li>
              </ul>
            </div>

            <div className="footer-social">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="https://www.facebook.com" target='_blank'>Facebook</a></li>
                <li><a href="https://www.twitter.com" target='_blank'>Twitter</a></li>
                <li><a href="https://www.instagram.com" target='_blank'>Instagram</a></li>
                <li><a href="https://www.youtube.com" target='_blank'>YouTube</a></li>
              </ul>
            </div>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
