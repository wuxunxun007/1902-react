import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store'
import kind from '@/views/kind/store'
// 合并reducer
const reducer = combineReducers({
  home,
  kind
})

const store = createStore(reducer);

export default store;
