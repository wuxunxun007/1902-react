import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import Prolist from './Prolist'
import axios from 'axios'
const Com = () => {
  const [bannerlist, setBanner] = useState([])
  useEffect(() => {
    axios.get('http://www.daxunxun.com/banner').then(res => {
      setBanner(res.data)
    })
  }, [bannerlist])
  const [prolist, setPro] = useState([])
  useEffect(() => {
    axios.get('http://www.daxunxun.com/douban').then(res => {
      setPro(res.data)
    })
  }, [prolist])
  return (
    <div>
      <Banner bannerlist = { bannerlist }/>
      <Prolist prolist = { prolist }/>
    </div>
  )
};

export default Com;
