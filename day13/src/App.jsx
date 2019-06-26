import React, { Component } from 'react';
import Home from './views/Home'
import Kind from './views/Kind'
class App extends Component {
  render () {
    return (
      <div>
        <h1>mobx 用法</h1>
        <Home />
        <Kind />
      </div>
    )
  }
}

export default App;
