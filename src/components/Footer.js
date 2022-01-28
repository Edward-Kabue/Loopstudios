import React from "react";
import img from "../images/logo.svg";
import {
  FaTwitter,
  FaFacebookSquare,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={img} alt="logo" />
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
          <ul className="social">
            <li>
              <FaFacebookSquare />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <div className="copyright">
            &copy; 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
