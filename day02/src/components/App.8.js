import React, { Component } from 'react'; 

class App extends Component { 
  constructor (props) {
    super(props);
    this.state = {
      flag: false
    }
  }

  render () {
    return (
      {
        if (this.state.flag) {
          <h1>如果为真我就显示</h1>
        } else {
          <h1>如果为假我就显示</h1>
        }
      }
    )
  }
}

export default App;
