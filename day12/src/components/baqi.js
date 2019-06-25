import React from 'react';
const baqi = (OldComponent) => {
  return class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        username: ''
      }
    }
  
    componentDidMount () {
      this.setState({
        username: localStorage.getItem('username')
      })
    }
  
    render () {
      return (
        <OldComponent username = {this.state.username} {...this.props}/>
      )
    }
  }
}

export default baqi;
