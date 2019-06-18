import React, { Component } from 'react'; 
import store from '@/store';
import Banner from './Banner';
class App extends Component { 

  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      store.dispatch({
        type: 'changeProlist',
        data: data
      })
    })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      store.dispatch({
        type: 'changeBannerlist',
        data: data
      })
    })
  }
  render () {
    console.log(store.getState())
    return (
      <div>
        11111
        <Banner bannerlist = { store.getState().bannerlist }/>
        {
          store.getState().prolist.map((item, index) => {
            return (<li key = { index }> { item.title } </li>)
          })
        }
      </div>
      
    )
  }
}

export default App;
