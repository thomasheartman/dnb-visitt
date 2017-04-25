/*
 * Created by Thomas Hartmann
 * This is the applications routing configuration.
 * It takes all the main components and renders them
 * at the specified path.
 */

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import createHistory from 'history/createBrowserHistory'
import MasterLayout from '../components/masterLayout/MasterLayout'
import Home from '../components/home/Home.map'
import OmVisitt from '../components/omVisitt/OmVisitt'
import HjelpOgKontakt from '../components/hjelpOgKontakt/HjelpOgKontakt'
import Boligvelger from '../components/boligvelger/Boligvelger'
import BestillVisitt from '../components/bestillVisitt/BestillVisitt.map'
import AnnonseWrapper from '../components/boligAnnonse/BoligAnnonseWrapper.map'
import Error404 from '../components/error404/Error404'

const history = createHistory()

export const home = '/'
export const omVisitt = '/om-visitt'
export const hjelpOgKontakt = '/hjelp-og-kontakt'
export const boligvelger = '/boligvelger'
export const annonse = `${boligvelger}/annonse`
export const bestillVisitt = '/bestill-visitt'

export default () => (
  <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <ScrollToTop>
      <MasterLayout>
        <Switch>
          <Route exact path={home} component={Home} />
          <Route path={omVisitt} component={OmVisitt} />
          <Route path={hjelpOgKontakt} component={HjelpOgKontakt} />
          <Route path={`${annonse}/:id`} component={AnnonseWrapper} />
          <Route path={boligvelger} component={Boligvelger} />
          <Route path={`${bestillVisitt}/:id`} component={BestillVisitt} />
          <Route component={Error404} />
        </Switch>
      </MasterLayout>
    </ScrollToTop>
  </Router>
)
