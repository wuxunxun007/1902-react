import React from 'react';

const ThemeContext  = React.createContext('green');

const Com = () => {
  return (
    <ThemeContext.Provider value = "pink">
      <A/>
    </ThemeContext.Provider>
  )
};

function A (props) {
  return (
    <B />
  )
}

class B extends React.Component {
  static contextType = ThemeContext;
  render () {
    return (
      <button theme = { this.context }></button>
    )
  }
}
export default Com;
