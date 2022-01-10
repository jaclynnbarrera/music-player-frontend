import React from "react";

const VideoEmbed = (props) => {
  console.log(props.video_link);
  return (
    <div>
      <iframe
        width="1000"
        height="800"
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
