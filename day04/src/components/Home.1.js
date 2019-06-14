import React, { Component } from 'react';
import ProList from './ProList';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      count: 0
    }
  }

  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }

  getCountFn (data) {
    this.setState({
      count: data
    })
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          首页内容 --- { this.state.count }
          <ProList activeIndex = { "0" } prolist = { this.state.prolist } getCountFn = { this.getCountFn.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default Com;