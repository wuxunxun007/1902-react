import { createStore } from 'redux';

const reducer = (state = {
  bannerlist: [],
  prolist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeBannerList':
      state = {
        bannerlist: data,
        prolist: state.prolist
      }
      return state;
    case 'changeProList':
      state = {
        bannerlist: state.bannerlist,
        prolist: data
      }
      return state;
  
    default:
      return state
  }
}

const store = createStore(reducer);

export default store