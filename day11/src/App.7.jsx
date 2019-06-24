import React, { useState, useEffect, useReducer } from 'react';
import Banner from './Banner';
import Prolist from './Prolist'
import axios from 'axios'
import reducer from './reducer'

const Com = () => {
  const [state, dispatch] = useReducer(reducer, {
    bannerlist: [],
    prolist: []
  })

  useEffect(() => {
    axios.get('http://www.daxunxun.com/banner').then(res => {
      dispatch({
        type: 'changeBannerList',
        data: res.data
      })
    })
    axios.get('http://www.daxunxun.com/douban').then(res => {
      dispatch({
        type: 'changeProList',
        data: res.data
      })
    })
  })
  return (
    <div>
      <Banner/>
      <Prolist prolist = { state.prolist }/>
    </div>
  )
};

export default Com;
