import React from "react";
import { Link } from "react-router-dom";

const Mixes = (props) => {
  return (
    <div>
      <div className="songs">
        {props.mixes.map((mix) => (
          <div key={mix.id} className="song">
            <Link to={`/songs/${mix.id}`}>
              <img src={mix.image_link} alt="artist"></img>
            </Link>
            <p>
              {mix.title} - {mix.artist}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixes;
