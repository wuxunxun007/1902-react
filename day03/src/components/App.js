import React, { Component } from 'react';
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
      <ul>
        {
          this.state.list.map(item => {
            return (<li key = { item.id } style={
              {
                width: '100%',
                height: '30px',
                lineHeight: '30px',
                borderBottom: '1px solid #ccc'
              }
            }>{ item.title }</li>)
          })
        }
      </ul>
    )
  }
}
export default Com;
