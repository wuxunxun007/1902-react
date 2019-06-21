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
  shouldComponentUpdate () {
    return false
  }
  render () {
    if (this.state.first) {
      return (
        <div className="first">
          <div>
            11div
            <span>1span</span>
            <span>2span</span>
          </div>
          <div>
            12div
            <span>1span</span>
            <span>2span</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="second">
          <div>
            21div
            <span>1span</span>
            <p>2span</p>
          </div>
          <div>
            22div
            <span>1span</span>
            <p>2span</p>
          </div>
        </div>
      )
    }
  }
}

export default App;
