import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../View/Components/Home/'
import PrivateRoute from './PrivatedRoute'
import LoginForm from '../View/Components/Login'
import { isUser } from '../Config/firebase'

const Routing = () => (
  <Switch>
    <PrivateRoute authenticated={true} exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
  </Switch>
)

export default Routing
