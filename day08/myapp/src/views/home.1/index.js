import { connect } from 'react-redux';
import UI from './UI';
import action from './action';
const mapStateToProps = (state) => ({
  homeBannerList: state.home.homeBannerList,
  homeProList: state.home.homeProList
})
const mapDispatchToProps = (dispatch) => ({
  getHomeBannerListData () { dispatch(action.getHomeBannerListData) },
  getHomeProListData () { dispatch(action.getHomeProListData) }
})
const Com = connect(mapStateToProps, mapDispatchToProps)(UI)

export default Com;