/*
 * @flow
 *  Created by Thomas Hartmann
 * This is the app's entry point, and thus initializes everything.
 */
'use strict'

import React from 'react'
import route from './routing/routes'
import { render } from 'react-dom'
import sampleData from './redux/initialState.json'
import storeFactory from './redux/store'
import { Provider } from 'react-redux'

// initialize the store with some nice data
const initialState = sampleData
const store = storeFactory(initialState)

// dispatch any necessary pre-start actions

// set a couple nice window variables for testing/debug
window.store = store
window.React = React

// render the app
render(
  <Provider store={store}>
    {route}
  </Provider>,
  document.getElementById('root')
)
