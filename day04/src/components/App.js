import React, { Component } from 'react';
import '@/main';
class Com extends Component {
  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">头部</header>
          <div className = "content">内容</div>
        </div>
        <footer className = "footer">底部</footer>
      </div>
    )
  }
}

export default Com;