import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export default function Routes() {

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="*" component={() => <h1> Page not found </h1>} />
    </Switch>
  )
}