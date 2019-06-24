import React from 'react';

const Com = (props) => {
  // console.log(props)
  return (
    <div>
      轮播图
      {
        props.bannerlist.map((item, index) => {
          return (
            <img key = { index } style = {{width: '100px'}} src={ 'http://www.daxunxun.com' + item } />
          )
        })
      }
    </div>
  )
};

export default Com;
