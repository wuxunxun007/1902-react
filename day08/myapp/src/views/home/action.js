import api from '@/api';
export default {
  getHomeBannerListData (dispatch) {
    api.reqGetData('/banner').then(data => {
      dispatch({
        type: 'changeHomeBannerList',
        data
      })
    })
  },
  getHomeProListData (dispatch) {
    api.reqGetData('/douban').then(data => {
      dispatch({
        type: 'changeHomeProList',
        data
      })
    })
  }
}