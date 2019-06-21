import React, { Component } from 'react';
import PropTypes from 'prop-types';
class App extends Component { 
  
  render () {
    return (
      <h1>{ this.props.name }</h1>
    )
  }
}
App.propTypes = {
  name: PropTypes.number
}
export default App;
