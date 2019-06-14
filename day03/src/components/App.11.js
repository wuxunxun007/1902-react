import React, { Component } from 'react';
import '@/main.scss';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: []
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
        list: data
      })
    })
  }
  render () {
    return (
      <ul className="list">
        {
          this.state.list.map(item => {
            return (<li key = { item.id }>{ item.title }</li>)
          })
        }
      </ul>
    )
  }
}
export default Com;
