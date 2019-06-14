import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      msg: 'hello world'
    }
  }
  changeData () {
    this.setState({
      msg: 'hello msg'
    })
  }
  render () {
    return (
      <div>
        { this.state.msg }
        <button onClick = { this.changeData.bind(this)}>修改</button>
      </div>
    )
  }
}
export default Com;
