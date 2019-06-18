import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
import store from './store'
function renderFn () {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}

renderFn();
store.subscribe(renderFn)