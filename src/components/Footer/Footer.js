import "./../../scss/Footer.scss";
import React from "react";

const Footer = () => (
  <div>
    <ul className="footer-container">
      <li>LOGO</li>
      <li>
        <a
          href="https://www.twitter.com/jaclynnbarr"
          target="_blank"
          rel="noreferrer"
        >
          built by jaclynnbarr
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jaclynnbarrera/music-player-frontend"
          target="_blank"
          rel="noreferrer"
        >
          repo
        </a>
      </li>
      <li>
        <a
          href="mailto: jaclynnbarrera@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          email
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
