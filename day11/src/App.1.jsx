import React, { useState } from 'react';

const Com = () => {
  // 设定了初始的状态 count的值为0，修改装填的方式为setCount
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击了 { count } 次</p>
      <button onClick = { () => {
        setCount(count + 1)
      } }>加1</button>
    </div>
  )
};

export default Com;
