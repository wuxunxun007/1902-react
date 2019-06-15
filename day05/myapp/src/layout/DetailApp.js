import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Detail from '@/views/Detail';
import Order from '@/views/Order';
function DetailApp () {
  return (
    <Switch>
      <Route path = "/detail/order" component = { Order } />
      <Route path = "/detail/:id" component = { Detail } />
    </Switch>
  )
}

export default DetailApp;
