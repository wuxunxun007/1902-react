import React, { Component } from 'react';
import ProList from './ProList';
class Com extends Component {
  constructor (props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = {
      value: ''
    }
  }

  changeHandler (event) {
    this.setState({
      value: event.target.value.toUpperCase()
    })
  }

  submitHandler (event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">表单</header>
        <div className = "content">
          {/* <form>
            <input type = "text" name = "username" />
            <input type = "submit" value = "提交" />
          </form> */}
          <form onSubmit = { this.submitHandler }>
            <input type = "text" value = { this.state.value } onChange = { this.changeHandler } />{ this.state.value }
            <input type = "submit" value = "提交" />
          </form>
        </div>
      </div>
    )
  }
}

export default Com;