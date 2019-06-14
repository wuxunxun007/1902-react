import React, { Component } from 'react';
import Home from '@/components/Home';
import '@/main';
class Com extends Component {
  render () {
    return (
      <div className = "container">
        <Home />
        <footer className = "footer">底部</footer>
      </div>
    )
  }
}

export default Com;