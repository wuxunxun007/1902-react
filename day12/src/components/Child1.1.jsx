import React, { Component } from 'react';

class Child1 extends Component {
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
        Child1组件 --- { this.state.username }
      </div>
    )
  }
}

export default Child1