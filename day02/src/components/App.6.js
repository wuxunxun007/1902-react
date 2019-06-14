import React, { Component } from 'react'; 

class App extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      list: ['a', 'b', 'c', 'd']
    }
  }

  render () {
    console.log(this.state.list)
    let arr = [];
    this.state.list.map((item, index) => {
      arr.push(<li key = { index }>{ item }</li>)
    })
    console.log(arr)
    return (
      <ul>
        { this.state.list } ---------------------
        { arr }
      </ul>
    )
  }
}

export default App;
