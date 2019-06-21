import React, { Component } from 'react'; 
import axios from 'axios'
class App extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      flag: false,
      tip: '正在加载'
    }
  }
  getBanner () {
    console.log(1)
    return axios.get('http://www.daxunxun.com/banner')
  }

  getList () {
    console.log(2)
    return axios.get('http://www.daxunxun.com/douban?count=1')
  }
  componentDidMount () {
    this.setState({
      tip: '正在加载'
    })
    axios.all([this.getBanner(), this.getList()])
      .then(axios.spread((bannerdata, prodata) => {
        console.log(bannerdata.data) // 代表banner的数据
        console.log(prodata.data) // 代表列表的数据
        this.setState({
          tip: '加载完成'
        })
      }))
    
  }
  render () {
    return (
      <div>
        { this.state.tip }
        {
          this.state.flag ? <h1>如果为真我就显示</h1> : <h1>如果为假我就显示</h1>
        }
      </div>
      
    )
  }
}

export default App;
