// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Songs from './Songs';

class App extends React.Component {

  render() {
    console.log("App render")
    return (
      <div className="App">
        <Songs />
      </div>
    );
  }
}

export default App