import "./scss/App.scss";
import React from "react";
import NavBar from "./components/NavBar";
import Scroll from "./components/Scroll";
import Main from "./components/Main";
import Songs from "./components/Latest";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div class="item">
          <NavBar />
        </div>
        <div class="item">
          <Scroll />
        </div>
        <div class="item">
          <Route exact path="/">
            <Main />
          </Route>
        </div>
        <Route exact path="/latest">
          <Songs />
        </Route>
        <div class="item">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
