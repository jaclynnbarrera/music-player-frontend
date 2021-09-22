// import logo from './logo.svg';
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Scroll";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    console.log("App render");

    return (
      <div className="App">
        <h4 className="headline">RADIO 135</h4>
        <NavBar />
        <Footer />
        <Home />
      </div>
    );
  }
}

export default App;
