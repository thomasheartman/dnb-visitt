/*
 * Created by Thomas Hartmann
 * This is the applications routing configuration.
 * It takes all the main components and renders them
 * at the specified path.
 */

import React from 'react'
// TODO: import components here
import MasterLayout from '../components/masterLayout/MasterLayout'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export default () => (
  <Router history={history}>
    <MasterLayout>
      <Route exact path='/' />
    </MasterLayout>
  </Router>
)

