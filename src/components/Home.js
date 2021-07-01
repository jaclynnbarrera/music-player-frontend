import React from "react";
import DailyPickContainer from "../containers/DailyPickContainer";

export default function Home() {
  return (
    <div className="home-page">
      <DailyPickContainer />
      {/* <div className="title">RADIO <br></br>135</div>
            <div className="copy">An online radio station with curated tunes</div> */}
    </div>
  );
}
