import React, { Component } from 'react';

class Child2 extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  componentDidMount () {
    this.setState({
      username: localStorage.getItem('username')
    })
  }

  render () {
    return (
      <div>
        Child2组件 --- { this.state.username }
      </div>
    )
  }
}

export default Child2