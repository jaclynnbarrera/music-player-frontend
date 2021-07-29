import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

class Mixes extends React.Component {
  render() {
    debugger;
    return (
      <div>mixes</div>
      //   <div>
      //     <div className="songs">
      //       {this.props.songs.map((song) => (
      //         <div key={song.id} className="song">
      //           <Link to={`/songs/${song.id}`}>
      //             <img src={song.image_link} alt="artist"></img>
      //           </Link>
      //           <p>
      //             {song.title} - {song.artist}
      //           </p>
      //           <Button />
      //         </div>
      //       ))}
      //     </div>
      //   </div>
    );
  }
}

export default Mixes;
