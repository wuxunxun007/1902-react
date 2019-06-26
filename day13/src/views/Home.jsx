
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
@inject('store')
@observer
class Home extends Component {
  componentDidMount () {
    const { store: { homeStore: { changeProList } } } = this.props;
    fetch('http://www.daxunxun.com/douban').then(res =>res.json()).then(data => {
      changeProList(data)
    })
  }
  render () {
    // console.log(this.props.store.homeStore.bannerlist)
    // const { bannerlist } = this.props.store.homeStore
    // const { homeStore: { bannerlist } } = this.props.store;
    const { store: { homeStore: { bannerlist, prolist, changeBannerList } } } = this.props;
    console.log(bannerlist)
    return (
      <div>
        首页组件
        <button onClick = { () => {
          changeBannerList([4, 5, 6])
        }}>获取轮播图</button>
        { 
          bannerlist.map((item, index) => (
           <p key = { index }> { item } </p>
          ))
        }
        { 
          prolist.map((item, index) => (
           <p key = { index }> { item.title } </p>
          ))
        }
      </div>
    )
  }
}

export default Home
