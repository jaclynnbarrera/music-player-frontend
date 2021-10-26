import React from "react";
import VideoEmbed from "./VideoEmbed";

const SongVideo = (props) => {
  return <VideoEmbed video_link={props.video} />;
};

export default SongVideo;
