// import logo from './logo.svg';
import './App.css';
import React from 'react'
import SongsContainer from './containers/SongsContainer'
import NavBar from './NavBar'

class App extends React.Component {

  render() {
    console.log("App render")
    return (
      <div className="App">
        <NavBar />
        <h4 id="headline">RADIO 135</h4>
        <SongsContainer />
        {/* <Songs /> */}
      </div>
    );
  }
}

export default App