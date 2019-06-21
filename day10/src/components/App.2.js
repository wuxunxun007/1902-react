import React, { Component } from 'react'; 
import axios from 'axios'
class App extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      flag: false
    }
  }
  componentDidMount () {
    axios.get('http://www.daxunxun.com/banner').then(res => {
      console.log(res.data)
      axios.get('http://www.daxunxun.com/douban?count=1').then(res => {
        console.log(res.data)
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.flag ? <h1>如果为真我就显示</h1> : <h1>如果为假我就显示</h1>
        }
      </div>
      
    )
  }
}

export default App;
