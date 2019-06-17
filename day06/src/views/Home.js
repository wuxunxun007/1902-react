import React from 'react';
import Banner from '@/components/common/Banner';
import ProList from '@/components/common/ProList';
import { Tabs } from 'antd-mobile';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: [],
      tabs: [
        { title: '1st Tab' },
        { title: '2nd Tab' },
        { title: '3rd Tab' },
        { title: '4th Tab' },
        { title: '5th Tab' },
        { title: '6th Tab' },
        { title: '7th Tab' },
        { title: '8th Tab' },
        { title: '9th Tab' },
      ],
      activeIndex: 0
    }
  }

  componentDidMount () {
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      this.setState({
        bannerlist: data
      })
    })
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      this.setState({
        prolist: data
      })
    })
  }
  renderContent (tab) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        <p>Content of {tab.title}</p>
      </div>
    )
    // let ta = ''
    // this.state.activeIndex === 0 ? ta = <Com1 /> : ''
    // this.state.activeIndex === 1 ? ta = <Com2 /> : ''
    // this.state.activeIndex === 2 ? ta = <Com3 /> : ''
    // this.state.activeIndex === 3 ? ta = <Com4 /> : ''
    // this.state.activeIndex === 4 ? ta = <Com5 /> : ''
    // return ta
  }
  clicktab (tabs, index) {
    console.log(index)
    this.setState({
      activeIndex: index
    })
  }
  render () {
    console.log(this.props)
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          <Tabs tabs={ this.state.tabs } onChange = { this.clicktab.bind(this)} onTabClick = { this.clicktab.bind(this)} renderTabBar={function (props) { 
            return <Tabs.DefaultTabBar {...props} page={3} />
          }}>
            {this.renderContent}
          </Tabs>
          <Banner bannerlist = { this.state.bannerlist }/>
          <ProList prolist = { this.state.prolist } { ...this.props }/>
        </div>
      </div>
    )
  }
}

export default Com;
