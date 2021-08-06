// import logo from './logo.svg';
import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    console.log("App render");

    return (
      <div className="App">
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
