import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';

const RouterMapping = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Page1} />
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(  
  <RouterMapping />, // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
