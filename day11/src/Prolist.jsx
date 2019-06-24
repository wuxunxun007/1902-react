import React from 'react';

const Com = (props) => {
  return (
    <div>
      列表
      {
        props.prolist.map((item, index) => {
          return (
            <div key = { index } >{ item.title }</div>
          )
        })
      }
    </div>
  )
};

export default Com;
