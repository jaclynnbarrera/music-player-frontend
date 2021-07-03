import React from "react";

const SongInfo = (props) => {
  return (
    <div className="song-info">
      <p>
        Today's Pick: {props.info && props.info[0]} by{" "}
        {props.info && props.info[1]}
      </p>
    </div>
  );
};

export default SongInfo;
