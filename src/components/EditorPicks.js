import "../scss/EditorPicks.scss";
import React from "react";

const EditorPicks = () => {
  return (
    <section className="editor-picks-container">
      <header>
        <h1>EDITOR PICKS</h1>
      </header>
      <div className="song-grid">
        <div class="selection"></div>
        <div class="selection"></div>
        <div class="selection"></div>
        <div class="selection"></div>
        <div class="selection"></div>
        <div class="selection"></div>
      </div>
    </section>
  );
};

export default EditorPicks;
