import React from 'react';

const Com = ({ bannerlist }) => (
  <ul>
    {
      bannerlist.map((item, index) => {
        return (<li key = { index }> { item }</li>)
      })
    }
  </ul>
)

export default Com;