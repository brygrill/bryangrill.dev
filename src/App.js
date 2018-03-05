import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="height-100">
        <div className="bg-main-flex">
          <h3><a target="_blank" rel="noopener noreferrer" href="https://github.com/brygrill">GITHUB</a></h3>
          <h3><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@brygrill/latest">MEDIUM</a></h3>
          <h3><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/brygrill">TWITTER</a></h3>
          <h3><a target="_blank" rel="noopener noreferrer" href="https://github.com/brygrill/grill/blob/master/README.md">PROJECTS</a></h3>
        </div>
      </div>
    );
  }
}

export default App;
