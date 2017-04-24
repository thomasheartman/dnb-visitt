/*
 * @flow
 *  Created by Thomas Hartmann
 * This is the app's entry point, and thus initializes everything.
 */

import React from 'react'
import Routes from './routing/Routes'
import { render } from 'react-dom'
import sampleData from './redux/initialState.json'
import storeFactory from './redux/store'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import visittTheme from './theme/visittMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { StickyContainer } from 'react-sticky'


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// initialize the store with some nice data
const initialState = sampleData
const store = storeFactory(initialState)

// dispatch any necessary pre-start actions

const App = () =>
  <Provider store={store}>
    <StickyContainer>
      <Routes />
    </StickyContainer>
  </Provider>

window.store = store
window.React = React

// set a couple nice window variables for testing/debug

// render the app
render(
  <MuiThemeProvider muiTheme={visittTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
