import { createStore } from 'redux';

// 包含组件的初始化的数据
// const reducer = () => {}

// const reducer = (state = '', action) => {}
// 就是提供初始化的数据，并且唯一修改数据的地方，函数必有返回值，返回新的数据（状态）
const reducer = (state = {prolist:[], bannerlist: []}, action) => {
  const { type, data } = action;
  if (type === 'changeProlist') {
    state.prolist = data
    return state
  } else  if (type === 'changeBannerlist') {
    state.bannerlist = data
    return state
  } else {
    return state
  }
  
}

const store = createStore(reducer)

export default store;