/*
 * Created by Thomas Hartmann
 * This is the applications routing configuration.
 * It takes all the main components and renders them
 * at the specified path.
 */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// TODO: import components here
import MasterLayout from '../components/masterLayout/MasterLayout'
import Home from '../components/home/HomeMap'
import OmVisitt from '../components/omVisitt/OmVisitt'
import HjelpOgKontakt from '../components/hjelpOgKontakt/HjelpOgKontakt'

const history = createHistory()

export default () => (
  <Router history={history}>
    <MasterLayout>
      <Route exact path='/' component={Home} />
      <Route path='/om-visitt' component={OmVisitt} />
      <Route path='/hjelp-og-kontakt' component={HjelpOgKontakt} />
    </MasterLayout>
  </Router>
)
