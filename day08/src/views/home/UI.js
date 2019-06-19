import React, { Component } from 'react';

class Com extends Component {
  componentDidMount () {

  }

  render () {
    return (
      <div>
        首页
        { this.props.bannerlist }
      </div>
    )
  }
}

export default Com;