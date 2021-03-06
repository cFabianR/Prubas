
import React, { Component } from 'react';
import './App.css';
import ControllerBar from './Controller.js'
import {ControllerGrapho} from './Controller.js'
import {Controller} from './Controller.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React and D3</h1>
        </header>
        <ControllerBar />
        <ControllerGrapho />
      </div>
    );
  }
}

export default App;
