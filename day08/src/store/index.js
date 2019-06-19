import { createStore } from 'redux';

function getNewState (state, obj) {
  return Object.assign({}, state, obj)
}

const reducer = (state = {
  bannerlist: [1, 2, 3],
  prolist: []
}, action) => {
  const { type, data } = action
  switch (type) {
    case 'changeBannerList':
      // 使用对象合并更新数据
      // return Object.assign({}, state, { bannerlist: data });
      return getNewState(state, {bannerlist: data})
    case 'changeProList':
      return Object.assign({}, state, { prolist: data });
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
