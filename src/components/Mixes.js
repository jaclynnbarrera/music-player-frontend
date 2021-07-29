import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Mixes = (props) => {
  debugger;
  return (
    <div>
      <div className="songs">
        {props.mixes.map((mix) => (
          <div key={mix.id} className="mix">
            {/* <Link to={`/songs/${song.id}`}>
              <img src={song.image_link} alt="artist"></img>
            </Link> */}
            <p>
              {mix.title} - {mix.artist}
            </p>
            {/* <Button /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixes;
