import React from "react";

const VideoEmbed = (props) => {
  console.log("video");
  return (
    <div className={"video" + (props.song ? "song" : "HP")}>
      <iframe
        width="1200"
        height="500"
        src={props.video_link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default VideoEmbed;
