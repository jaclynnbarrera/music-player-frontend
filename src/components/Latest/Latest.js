import React from "react";
import SongCard from "../Song/SongCard";
import { Link } from "react-router-dom";

class Songs extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://calm-basin-04200.herokuapp.com/songs")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          isLoaded: true,
          songs: data,
        });
      })
      .catch((error) => console.log("error: ", error));
  }

  render() {
    return (
      <section className="latest">
        <h1>LATEST</h1>
        <p>The newest additions to the Radioo 135 archive, updated weekly.</p>
        <div className="songs-grid">
          {this.state.isLoaded &&
            this.state.songs.map((song) => (
              <SongCard song={song} key={song.id} />
            ))}
        </div>
      </section>
    );
  }
}

export default Songs;
