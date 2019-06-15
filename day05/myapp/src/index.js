import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from '@/layout/App';
import DetailApp from '@/layout/DetailApp';
import * as serviceWorker from './serviceWorker';

// HashRouter 表示你给根节点root要通过路由去渲染页面
// HashRouter 只能有一个子元素，所以会用Switch
// Route 就表示路由的规则
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path = "/detail" component = { DetailApp } />
      <Route path = '/' component = { App }/>
    </Switch>
  </HashRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // 打包时改成 register()
