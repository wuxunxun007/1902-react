
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
@inject('store')
@observer
class Kind extends Component {
  render () {
    const { store: { kindStore: { changeHomeBannerList } } } = this.props;
    return (
      <div>
        分类组件
        <button onClick = { () => {
          changeHomeBannerList()
        }}>获取轮播图</button>
      </div>
    )
  }
}

export default Kind
