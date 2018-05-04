import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Store from './Store'
import Redux from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Counter store={Store} />
      </div>
    );
  }
}

export default App;
