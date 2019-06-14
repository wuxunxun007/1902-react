import React from 'react';

const Com = (props) => (
  <div>
    <button onClick = { () => {
      props.getCountFn(props.prolist.length)
    } }>计数器</button>
    <ul>
      {
        props.prolist.map(item => {
          return (<li key = { item.id }> { item.title } </li>)
        })
      }
    </ul>
  </div>
)

export default Com;