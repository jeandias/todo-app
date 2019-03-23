import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './template/menu'
import Todo from './todo/Todo'
import About from './about/About';

export default props => (
  <Router>
    <div>
      <Menu />
      <Route path="/" exact component={Todo} />
      <Route path="/todos/" component={Todo} />
      <Route path="/about/" component={About} />
    </div>
  </Router>
)
