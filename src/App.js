// import logo from './logo.svg';
import './App.css';
import React from 'react'
import SongsContainer from './containers/SongsContainer'
import SearchContainer from './containers/SearchContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Route } from 'react-router-dom'
import Footer from './components/Footer'

class App extends React.Component {

  render() {
    console.log("App render")
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchContainer}/>
        <SongsContainer />
        <Footer />
      </div>
    );
  }
}

export default App
