import React, { Component } from 'react';
import axios from 'axios'
class Com extends Component {
  componentDidMount () {
    axios.get('/api/hwxm/jsonp/jsp.json').then(res => {
      console.log(res.data)
    })
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">分类头部</header>
        <div className = "content">分类内容</div>
      </div>
    )
  }
}

export default Com;