import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Series from './Series';
import SingleSeries from './SingelSeries';

const Main = props => (
  <Switch>
    <Route exact path="/" component={Series} />
    <Route path="/series/:id" component={SingleSeries} />
  </Switch>
);

export default Main;
