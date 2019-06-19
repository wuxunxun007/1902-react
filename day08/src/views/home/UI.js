import React, { Component } from 'react';

class Com extends Component {
  componentDidMount () {
    this.props.getBannerListData();
    this.props.getProListData();
  }

  render () {
    return (
      <div>
        首页1
        { 
          this.props.bannerlist.map((item, index) => (
            <li key = { index }>{ item }</li>
          ))
        }
        { 
          this.props.prolist.map((item, index) => (
            <li key = { index }>{ item.title }</li>
          ))
        }
      </div>
    )
  }
}

export default Com;