import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../View/Components/Home/'
import PrivateRoute from './PrivatedRoute'
const Routing = () => (
  <Switch>
    <PrivateRoute authenticated={true} exact path="/" component={Home} />
    <Route exact path="/login" component={Home} />
  </Switch>
)

export default Routing
