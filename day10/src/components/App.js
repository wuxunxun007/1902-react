import React, { Component } from 'react'; 
import axios from 'axios'
import * as ajax  from '@/api'

class App extends Component { 
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    console.log(ajax)
    // ajax.getHomeBanner().then(res => {
    //   console.log(res.data)
    // })
    // ajax.getHomePro().then(res => {
    //   console.log(res.data)
    // })
    ajax.login({username: '18813007814', 'password': '123456'}).then(res => {
      console.log('login', res.data)
    })
    axios.all([ajax.getHomeBanner(),  ajax.getHomePro()])
    .then(axios.spread((banner, pro) => {
      console.log('banner', banner.data)
      console.log('pro', pro.data)
    }))
  }
  render () {
      return (
        <div>
          列表
        </div>
      )
    
  }
}

export default App;
