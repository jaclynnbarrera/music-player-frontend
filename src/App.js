// import logo from './logo.svg';
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Scroll from "./components/Scroll";
import Home from "./components/Home";
import Footer from "./components/Footer";
import logo from "./images/logo.png";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h4 className="headline">
          RADIO 135 <img src={logo} alt="logo" />
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
