import "../scss/Hero.scss";
import React from "react";
import VideoEmbed from "./VideoEmbed";

class Hero extends React.Component {
  render() {
    var song =
      this.props.song &&
      this.props.song[Math.floor(Math.random() * this.props.song.length)];
    return (
      // include link to watch song
      <div className="hero-container">
        <img src={song.image_link} alt={song.artist} />
        <p>{song.title}</p>
        <p>{song.artist}</p>
      </div>
    );
  }
}

export default Hero;
