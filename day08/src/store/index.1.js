import { createStore } from 'redux';
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

// createStore 第一个参数只能有一个reducer
const store = createStore(reducer);

export default store;
