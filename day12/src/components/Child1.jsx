import React, { Component } from 'react';
import baqi from './baqi';

// class Child1 extends Component {
  
//   render () {
//     return (
//       <div>
//         Child1组件 --- { this.props.username }
//       </div>
//     )
//   }
// }
const Child1 = ({username}) => (
  <div>
    Child1组件 --- { username }
  </div>
)
Child1 = baqi(Child1)  // mixins
export default Child1