import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/home/store';

const reducer = combineReducers({
  home
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;