import React, { Component } from 'react';
import baqi from './baqi';

class Child2 extends Component {

  render () {
    return (
      <div>
        Child2组件 --- { this.props.username }
      </div>
    )
  }
}
Child2 = baqi(Child2)
export default Child2