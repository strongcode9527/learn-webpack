import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import asyncComponent from '../components/asyncComponent'

const AsyncHome = asyncComponent(() => import('./home'))
const AsyncShow = asyncComponent(() => import('./show'))

const BasicExample = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/show" component={AsyncShow} /> 
    </Switch>
  </Router>
)

export default BasicExample