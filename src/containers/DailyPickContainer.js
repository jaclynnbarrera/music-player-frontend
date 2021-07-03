import React from "react";
import FeatureSongInfo from "../components/FeatureSongInfo";
import FeatureSongVideo from "../components/FeatureSongVideo";

class DailyPickContainer extends React.Component {
  render() {
    console.log("daily pick container");
    return (
      <div className="daily-pick">
        Daily Pick Container
        <FeatureSongInfo />
        <FeatureSongVideo />
      </div>
    );
  }
}

export default DailyPickContainer;
