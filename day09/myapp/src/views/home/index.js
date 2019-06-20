import React, { Component } from 'react';
import Banner from '@/components/Banner';
import store from '@/store'
import api from '@/api';
class Com extends Component {
  componentDidMount () {
    api.reqGetData('/banner').then(data => {
      store.dispatch({
        type: 'changeHomeBannerList',
        data
      })
    })
    api.reqGetData('/douban').then(data => {
      store.dispatch({
        type: 'changeHomeProList',
        data
      })
    })
  }

  render () {
    console.log(store.getState())
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          <Banner bannerlist = { store.getState().home.homeBannerList }/>
        </div>
      </div>
    )
  }
}

export default Com;