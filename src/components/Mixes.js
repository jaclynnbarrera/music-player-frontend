import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

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
            {/* <Button /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mixes;
