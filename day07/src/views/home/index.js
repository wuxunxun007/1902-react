import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    bannerlist: state.bannerlist,
    prolist: state.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerList () {
      fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
        dispatch({
          type: 'changeBannerList',
          data
        })
      })
    },
    getProList () {
      fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
        dispatch({
          type: 'changeProList',
          data
        })
      })
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;