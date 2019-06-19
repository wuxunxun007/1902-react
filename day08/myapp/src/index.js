import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/layout/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './main.scss';

ReactDOM.render(
<Provider store = { store }>
  <HashRouter>
    <Switch>
      <Route path = "/" component = { App } />
    </Switch>
  </HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
