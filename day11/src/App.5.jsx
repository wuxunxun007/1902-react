import React, { useReducer } from 'react';

const reducer = (state, action) => {
  const { type, data } = action;
  switch (type) {
    case 'add':
      return Object.assign({}, state, {count: data})
    case 'reduce':
      return Object.assign({}, state, {count: data})
    default:
      return state
  }
}

const Com = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <div>
      <p>你点击了 { state.count } 次</p>
      <button onClick = { () => {
        dispatch({
          type: 'add',
          data: state.count + 1
        })
      } }>加1</button>
      <button onClick = { () => {
        dispatch({
          type: 'reduce',
          data: state.count - 1
        })
      } }>减1</button>
    </div>
  )
};

export default Com;
