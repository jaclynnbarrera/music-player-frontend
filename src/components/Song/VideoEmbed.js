import React from "react";

const VideoEmbed = (props) => {
  return (
    <div className="video-responsive">
      <iframe
        width="500"
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
