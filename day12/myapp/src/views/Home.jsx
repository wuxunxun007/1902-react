
import React, { Component } from 'react';
import { Observer, inject} from 'mobx-react';

@inject('store')
@Observer
class Home extends Component {
  
  render () {
    // console.log(this.props.store.homeStore)
    // let bannerlist = this.props.store.homeStore.bannerlist
    // let getBannerListData = this.props.store.homeStore.getBannerListData
    // let { bannerlist } = this.props.store.homeStore;
    // let { homeStore } = this.props.store
    // let { homeStore: {bannerlist} } = this.props.store
    let {store: { homeStore: {bannerlist, getBannerListData} }} = this.props
    console.log(bannerlist)
    return (
      <div>
        首页组件
        <button onClick = { () => {
          getBannerListData()
        }}>获取轮播图</button>
        { 
          bannerlist.map((item, index) => (
           <p key = { index }> { item } </p>
          ))
        }
      </div>
    )
  }
}

export default Home
