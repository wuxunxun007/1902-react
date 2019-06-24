import React from 'react';



const Com = () => {
  return (
    <A theme = "pink" />
  )
};

function A (props) {
  return (
    <B theme = { props.theme } />
  )
}

class B extends React.Component {
  render () {
    return (
      <button theme = { this.props.theme }></button>
    )
  }
}
export default Com;
