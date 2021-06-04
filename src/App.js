// import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {

  componentDidMount() {
    return fetch('http://localhost:3000/songs')
    .then(r => r.json())
    .then(songs => {console.log(songs)})
  }
  
  render() {
    return (
      <div className="App">
       App
      </div>
    );
  }
}

export default App;