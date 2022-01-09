import React from "react";
import Hero from "./Hero";
import Genres from "./Genres";
import EditorPicks from "./EditorPicks";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
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
      <div>
        <Hero song={this.state.isLoaded && this.state.songs} />
        <Genres />
        <EditorPicks
          songs={this.state.isLoaded ? this.state.songs.slice(0, 12) : null}
        />
      </div>
    );
  }
}

export default Home;
