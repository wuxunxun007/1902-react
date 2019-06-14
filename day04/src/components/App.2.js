import React from 'react';
function fn (user) {
  if (user) {
    return 'hello,' + user.firstname + ' ' + user.lastname;
  } else {
    return 'hello world'
  }
}

// const user = {
//   // firstname: 'wu',
//   // lastname: 'daxun'
// }

const Com = <div>{ fn() }</div>

export default Com;