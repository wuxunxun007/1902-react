import React, { Component } from 'react';

class Com extends Component {
  constructor (props) {
    super(props);
    console.log('1', this); 
  }

  btnClickFn () {
    console.log('2', this); // undefined  ----  this指向的问题
  }

  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn }>react按钮</button>
      </div>
    )
  }
}
// const com = new Com()
// com.btnClickFn()
export default Com;
