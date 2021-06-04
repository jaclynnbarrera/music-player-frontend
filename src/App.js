// import logo from './logo.svg';
import './App.css';
import React from 'react'
import SongsContainer from './containers/SongsContainer'

class App extends React.Component {

  render() {
    console.log("App render")
    return (
      <div className="App">
        <h4>Music Player</h4>
        <SongsContainer />
        {/* <Songs /> */}
      </div>
    );
  }
}

export default App