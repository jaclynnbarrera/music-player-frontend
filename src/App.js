// import logo from './logo.svg';
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import Home from "./components/Home";
import PlaylistsContainer from "./containers/PlaylistsContainer";

class App extends React.Component {
  render() {
    console.log("App render");
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/search" component={SearchResults} />
        <Home />
        <Route exact path="/playlists">
          <PlaylistsContainer />
        </Route>
        <Footer />
      </div>
    );
  }
}

export default App;
