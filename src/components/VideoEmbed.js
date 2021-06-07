import React from 'react'

const VideoEmbed = (props) => {
    console.log("video")
    return (
        <div className="video">
        <iframe
          width="400"
          height="400"
          src={props.video_link}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    )
}

export default VideoEmbed