import React, { Component } from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

class App extends Component {
  render () {
    return (
      <div>
        <Child1 />
        <Child2 />
      </div>
    )
  }
}

export default App