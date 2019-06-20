import React, { Component } from 'react';
import Banner from '@/components/Banner';
import store from '@/store'
import api from '@/api';
import axios from 'axios';
class Com extends Component {
  componentDidMount () {
    api.reqGetData('/banner').then(data => {
      store.dispatch({
        type: 'changeHomeBannerList',
        data
      })
    })
    // axios.get('http://www.daxunxun.com/banner').then(res => {
    //   console.log('banner', res.data)
    //   store.dispatch({
    //     type: 'changeHomeBannerList',
    //     data: res.data
    //   })
    // })
    api.reqGetData('/douban').then(data => {
      console.log(data)
      // store.dispatch({
      //   type: 'changeHomeDogList',
      //   data: data.dogList
      // })
      // store.dispatch({
      //   type: 'changeHomeCatList',
      //   data: data.catList
      // })
    })
  }

  render () {
    console.log(store.getState())
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          <Banner bannerlist = { store.getState().home.homeBannerList }/>
          狗
          {
            store.getState().home.homeDogList.map((item) => {
              return (<li key = { item.id }>{ item.title }---{ item.sex === 0 ? 'MM' : 'DD' }</li>)
            })
          }
          猫
          {
            store.getState().home.homeCatList.map((item) => {
              return (<li key = { item.id }>{ item.title }----{ item.sex === 0 ? 'MM' : 'DD' }</li>)
            })
          }
        </div>
      </div>
    )
  }
}

export default Com;