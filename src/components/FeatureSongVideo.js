import React from "react";
import VideoEmbed from "./VideoEmbed";

const SongVideo = (props) => {
  return (
    <div className="song-video">
      <VideoEmbed video_link={props.video} />
    </div>
  );
};

export default SongVideo;
