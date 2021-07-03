import React from "react";
import FeatureSongInfo from "../components/FeatureSongInfo";
import FeatureSongVideo from "../components/FeatureSongVideo";

class DailyPickContainer extends React.Component {
  render() {
    console.log("daily pick container");

    var song =
      this.props.song[Math.floor(Math.random() * this.props.song.length)];

    return (
      <div className="daily-pick-container">
        <FeatureSongInfo info={song && [song.title, song.artist]} />
        <FeatureSongVideo video={song && song.video_link} />
      </div>
    );
  }
}

export default DailyPickContainer;
