import "./../../scss/Hero.scss";
import React from "react";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div>
      <Link to={`tracks/${props.song.id}`}>
        <main>
          <div className="hero-container">
            <h1>
              <span>{props.song.title}</span>
            </h1>
            <p>
              <span>{props.song.artist}</span>
            </p>
            <img src={props.song.image_link} alt={props.song.artist} />
          </div>
        </main>
      </Link>
    </div>
  );
}

export default Hero;
