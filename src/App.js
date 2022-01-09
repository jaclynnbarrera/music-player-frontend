import "./scss/App.scss";
import React from "react";
import NavBar from "./components/Nav/NavBar";
import Home from "./components/Home/Home";
import Latest from "./components/Latest/Latest";
import Explore from "./components/Explore/Explore";
import SongDetail from "./components/Song/SongDetail";
//account
import Footer from "./components/Footer/Footer";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/latest">
          <Latest />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/tracks/:songId">
          <SongDetail />
        </Route>
        {/* <Route exact path="/account">
          <Account />
        </Route> */}
        <Footer />
      </div>
    );
  }
}

export default App;
