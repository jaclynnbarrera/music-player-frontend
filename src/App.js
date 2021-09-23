// import logo from './logo.svg';
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Scroll from "./components/Scroll";
import Home from "./components/Home";
import sketch from "./images/sketch.png";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    console.log("App render");

    return (
      <div className="App">
        <h4 className="headline">
          RADIO 135 <img src={sketch} alt="sketch" />
        </h4>
        <NavBar />
        <Scroll />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
