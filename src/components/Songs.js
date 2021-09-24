import React from "react";
import { Link } from "react-router-dom";

class Songs extends React.Component {
  render() {
    return (
      <div>
        <div className="songs">
          {this.props.songs &&
            this.props.songs.map((song) => (
              <div key={song.id} className="song">
                <Link to={`/songs/${song.id}`}>
                  <img src={song.image_link} alt="artist"></img>
                </Link>
                <p>
                  {song.title} - {song.artist}
                </p>
                <div className="genres">
                  {song && song.categories.map((c, i) => <p key={i}>{c}</p>)}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Songs;
