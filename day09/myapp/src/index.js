import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/layout/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './main.scss'

function renderFn () {
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route path = "/" component = { App } />
      </Switch>
    </HashRouter>, document.getElementById('root'));
}

renderFn();
store.subscribe(renderFn)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
