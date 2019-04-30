// routes/index.js

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../View/Components/Home/'
const Routing = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Routing
