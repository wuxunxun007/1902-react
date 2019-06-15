import React from 'react';

class Com extends React.Component {
  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">订单头部</header>
          <div className = "content">订单内容</div>
        </div>
        <footer className = "footer">订单底部</footer>
      </div>
    )
  }
}

export default Com;
