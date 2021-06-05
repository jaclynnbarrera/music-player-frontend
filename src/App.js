// import logo from './logo.svg';
import './App.css';
import React from 'react'
import SongsContainer from './containers/SongsContainer'
import NavBar from './NavBar'
import About from './components/About'
import { Route } from 'react-router-dom'

class App extends React.Component {

  render() {
    console.log("App render")
    return (
      <div className="App">
        <NavBar />
        <h4 id="headline">RADIO 135</h4>
        <Route exact path="/about"><About /></Route>
        <SongsContainer />
      </div>
    );
  }
}

export default App
