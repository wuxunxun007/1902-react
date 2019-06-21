import React, { Component } from 'react'; 
import axios from 'axios'
import * as ajax  from '@/api'

class App extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      first: true
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        first: false
      })
    }, 5000)
  }
  render () {
    if (this.state.first) {
      return (
        <div className="first">
          <span>1111111</span>
        </div>
      )
    } else {
      return (
        <div className="second">
          <p>2222222222</p>
        </div>
      )
    }
  }
}

export default App;
