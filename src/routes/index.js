import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'
import LoginLayout from 'layouts/LoginLayout/LoginLayout'
import LoginView from 'views/LoginView/LoginView'

export default (store) => (
  <Router>
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={HomeView} />
    </Route>
    <Route path='/login' component={LoginLayout}>
      <IndexRoute component={LoginView} />
    </Route>
  </Router>
)
