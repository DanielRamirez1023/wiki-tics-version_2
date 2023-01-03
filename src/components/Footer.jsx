import React from "react";
import "../styles/Footer.css";
import Logo from "../assets/Logo.jpeg";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" width="10%" />
      <ul>
        <li>
          <i className="fa-brands fa-facebook"></i>
        </li>
        <li>
          <i className="fa-brands fa-instagram"></i>
        </li>
        <li>
          <i className="fa-brands fa-twitter"></i>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
