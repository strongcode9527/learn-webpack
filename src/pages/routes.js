import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './home/index.js'

const BasicExample = () => (
  <Router>
    <Route exact path="/" component={Home} />
    {/* <Route path="/about" component={About} />
    <Route path="/topics" component={Topics} /> */}
  </Router>
);

export default BasicExample