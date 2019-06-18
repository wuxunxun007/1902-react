import React, {Component} from 'react';
import store from '../store';

class Com extends Component {
  componentDidMount () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      store.dispatch({
        type: 'changeBannerList',
        data
      })
    })
  }
  render () {
    return (
      <div>
        {
          store.getState().bannerlist.map((item, index) => {
            return  <li key = { index }> {item} </li>
          })
        }
      </div>
    )
  }
}

export default Com;