// import logo from './logo.svg';
import "./App.css";
import React from "react";
import SongsContainer from "./containers/SongsContainer";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";

class App extends React.Component {
  render() {
    console.log("App render");
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/search" component={SearchResults} />
        <SongsContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
