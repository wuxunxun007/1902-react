import React from 'react'
// import store from '@/store'
const Com = ({ bannerlist }) => (
  <div>
    {
      // store.getState().bannerlist.map((item, index) => {
      //   return (<img key = { index } src={ 'http://www.daxunxun.com' + item}/> )
      // })
      bannerlist.map((item, index) => {
        return (<img key = { index } src={ 'http://www.daxunxun.com' + item}/> )
      })
    }
  </div>
)

export default Com