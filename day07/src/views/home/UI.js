import React from 'react';
import Banner from '@/components/Banner';
class Com extends React.Component {
  componentDidMount () {
    console.log(this.props)
    this.props.getBannerList()
    this.props.getProList()
  }
  render () {
    console.log(this.props)
    return (
      <div>首页
        <Banner bannerlist = { this.props.bannerlist }/>
        11111111111
        {
          this.props.prolist.map((item, index) => {
            return (<li key = { index }> { item.title }</li>)
          })
        }
      </div>
    )
  }
}

export default Com;