import React, { Component } from 'react'; 
import axios from 'axios'

function reqData (url, method, data) {
  return axios({
    url: url,
    method: method || 'get',
    // data: data || {}
  })
}

class App extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      flag: false
    }
  }
  getBanner () {
    console.log(1)
    return reqData('http://www.daxunxun.com/banner')
  }

  getList () {
    console.log(2)
    return reqData('http://www.daxunxun.com/douban?count=1')
  }
  componentDidMount () {
    this.setState({
      flag: false
    })
    axios.all([this.getBanner(), this.getList()])
      .then(axios.spread((bannerdata, prodata) => {
        console.log('banner', bannerdata) // 代表banner的数据
        console.log('pro', prodata) // 代表列表的数据
        this.setState({
          flag: true
        })
      }))
    
  }
  render () {
    if (this.state.flag === false) {
      return (
        <div>
          正在加载
        </div>
      )
    } else {
      return (
        <div>
          列表
        </div>
      )
    }
    
  }
}

export default App;
