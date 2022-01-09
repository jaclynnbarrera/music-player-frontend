import "../scss/EditorPicks.scss";
import React from "react";
import SongCard from "./SongCard";

const EditorPicks = (props) => {
  return (
    <section className="editor-picks-container">
      <h1>EDITOR PICKS</h1>
      <p>Hand selected picks of our favorite songs.</p>
      <div className="songs-grid">
        {props.songs && props.songs.map((song) => <SongCard song={song} />)}
      </div>
    </section>
  );
};

export default EditorPicks;
