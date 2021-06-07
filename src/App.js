// import logo from './logo.svg';
import './App.css';
import React from 'react'
import SongsContainer from './containers/SongsContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Submit from './components/Submit'
import { Route } from 'react-router-dom'
import Footer from './components/Footer'

class App extends React.Component {

  render() {
    console.log("App render")
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/submit" component={Submit}/>
        <SongsContainer />
        <Footer />
      </div>
    );
  }
}

export default App