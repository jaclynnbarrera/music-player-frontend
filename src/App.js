import "./scss/App.scss"
import React from "react";
import NavBar from "./components/NavBar";
import Scroll from "./components/Scroll";
import Main from "./components/Main";
import Footer from "./components/Footer";

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
        <div class="item"><Main/></div>
        <div class="item">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;