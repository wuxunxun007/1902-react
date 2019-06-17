import React from 'react';
import ProList from '@/components/common/ProList';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: []
    }
  }

  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          首页内容
          <ProList prolist = { this.state.prolist } { ...this.props }/>
        </div>
      </div>
    )
  }
}

export default Com;
