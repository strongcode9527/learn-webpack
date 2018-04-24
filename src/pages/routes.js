import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import asyncComponent from '../components/asyncComponent'
import {sum} from '../utils'
import Home from './home'
import Show from './show'

// code-spliting 为了实验tree-shaking先注释。
// const AsyncHome = asyncComponent(() => import('./home'))
// const AsyncShow = asyncComponent(() => import('./show'))

// 这里调用函数，只是为了实验tree-shaking
sum()

const BasicExample = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/show" component={Show} /> 
    </Switch>
  </Router>
)

export default BasicExample