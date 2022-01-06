import "../scss/Footer.scss";
import React from "react";
import logo from "../images/logo.png";

const Footer = () => (
  <div>
    <ul className="footer-container">
      <li>LOGO</li>
      <li>
        <a href="https://www.twitter.com/jaclynnbarr" target="_blank">
          built by jaclynnbarr
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jaclynnbarrera/music-player-frontend"
          target="_blank"
        >
          repo
        </a>
      </li>
      <li>
        <a href="mailto: jaclynnbarrera@gmail.com" target="_blank">
          email
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
