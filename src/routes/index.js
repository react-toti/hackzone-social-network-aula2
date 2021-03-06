import React from 'react';

import { Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return(
    <Switch>
      <Route exact path="/" component={SignIn}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Switch>
  )
}