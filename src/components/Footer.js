import React from "react";

const Footer = (props) => (
  <div className="footer">
    <img src={props.img} alt="sketch" />
    <div>
      <a href="https://www.twitter.com/jaclynnbarr" target="_blank">
        built by jaclynnbarr
      </a>
    </div>
    <div>
      <a
        href="https://github.com/jaclynnbarrera/music-player-frontend"
        target="_blank"
      >
        repo
      </a>
    </div>
    <div>
      <a href="mailto: jaclynnbarrera@gmail.com" target="_blank">
        email
      </a>
    </div>
  </div>
);

export default Footer;
