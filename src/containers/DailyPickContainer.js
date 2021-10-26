import React from "react";
import FeatureSongVideo from "../components/FeatureSongVideo";

class DailyPickContainer extends React.Component {
  render() {
    var song =
      this.props.song &&
      this.props.song[Math.floor(Math.random() * this.props.song.length)];
    return (
      <div className="HERO">
        <div className="daily-pick-container">
          <FeatureSongVideo video={song && song.video_link} />
        </div>
        <div>something here</div>
      </div>
    );
  }
}

export default DailyPickContainer;
