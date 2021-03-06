import React, { useState } from 'react';

const Com = () => {
  // 设定了初始的状态 count的值为0，修改装填的方式为setCount
  const [count, setCount] = useState(0);
  const [bannerlist, setBannerList] = useState([1, 2, 3, 4, 5])
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
