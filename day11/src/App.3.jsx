import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Com = () => {
  // 设定了初始的状态 count的值为0，修改装填的方式为setCount
  const [count, setCount] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  const [bannerlist, setBannerList] = useState([1, 2, 3, 4, 5])
  useEffect(() => {
    axios.get('http://www.daxunxun.com/banner').then(res => {
      // console.log(res.data)
      setBannerList(res.data)
    })
  }, [bannerlist])
  return (
    <div>
      <p>你点击了 { count } 次</p>
      <button onClick = { () => {
        setCount(count + 1)
      } }>加1</button>
      <ul>
        { 
          bannerlist.map((item, index) => (
            <li key = { index }> { item } </li>
          ))
        }
      </ul>
    </div>
  )
};

export default Com;
