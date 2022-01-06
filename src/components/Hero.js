import "../scss/Hero.scss";
import React from "react";
import VideoEmbed from "./VideoEmbed";

class Hero extends React.Component {
  render() {
    var song =
      this.props.song &&
      this.props.song[Math.floor(Math.random() * this.props.song.length)];
    return (
      <div className="hero-container">
        <VideoEmbed video_link={song && song.video_link} />
      </div>
    );
  }
}

export default Hero;
