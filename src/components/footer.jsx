import React from "react";
import '../footer.css';

import { SlSocialLinkedin} from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { FaHackerrank } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <h3>MERN STACK DEVELOPER</h3>
          <p>A Portfolio Website Made By Afiya Zannuba Jaleel</p>
          <p>Email : afiya.zannubaa@gmail.com</p>
          <ul className="socials">
            <li><a href="https://www.linkedin.com/in/afiya-zannuba-jaleel/"><SlSocialLinkedin /></a></li>
            <li><a href="https://github.com/AfiyaZannuba"><FiGithub /></a></li>
            <li><a href="https://www.hackerrank.com/afiya_zannubaa"><FaHackerrank /></a></li>
            <li><a href="https://medium.com/@Afiya_Techy"><BsMedium /></a></li>
          </ul>

          <div class="footer-bottom">
            <p>copyright &copy;2023 <a href="#">Afiya Zannuba Jaleel</a>  </p>
          </div>
          <div class="footer-menu">
 <ul class="f-menu">
    <li><Link  to="/">Home</Link></li>
    <li><Link  to="/About">About</Link></li>
    <li><Link  to="/Portfolio">Portfolio</Link></li>
    <li><Link to="/Skills">Skills</Link></li>
 </ul>
</div>

        </div>
      </footer>
    </>
  )
}

export default Footer;