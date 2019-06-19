import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => {
  return {
    bannerlist: state.bannerlist,
    prolist: state.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerListData () {
      
    }
  }
}

const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;
