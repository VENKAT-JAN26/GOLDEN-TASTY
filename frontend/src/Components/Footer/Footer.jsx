import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
             "Discover the taste of tradition at Tomoto Food Shop.
              Fresh, flavorful,and handcrafted just for you.
             Join us in experiencing the essence of quality dining. 
             Your satisfaction, our commitment. Visit us today!."
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2> GET IN TOUCH</h2>
          <ul>
            <li>+91 7502545493</li>
            <li>contact@tomoto.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomoto.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
