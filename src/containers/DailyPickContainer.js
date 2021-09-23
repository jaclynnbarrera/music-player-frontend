import React from "react";
import FeatureSongVideo from "../components/FeatureSongVideo";

class DailyPickContainer extends React.Component {
  render() {
    var song =
      this.props.song &&
      this.props.song[Math.floor(Math.random() * this.props.song.length)];
    return (
      <div className="daily-pick-container">
        <FeatureSongVideo video={song && song.video_link} />
      </div>
    );
  }
}

export default DailyPickContainer;
