import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      <i className="fa fa-calendar-check-o"></i> Todo App
    </Link>
    <div id="navbarNav" className="collapse navbar-collapse">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/todos/">To do</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about/">About</Link>
        </li>
      </ul>
    </div>
  </nav>
)
