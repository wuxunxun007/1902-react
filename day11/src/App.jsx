import React from 'react';

class Com extends React.Component {
  loginFn () {
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    console.log(username, password)
  }
  render () {
    return (
      <div>
        <input type="text" ref="username"/>
        <input type="password" ref = "password"/>
        <button onClick = {this.loginFn.bind(this)}>登陆</button>

      </div>
    )
  }
}

export default Com;
