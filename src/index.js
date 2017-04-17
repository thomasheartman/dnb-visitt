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
import { database } from './firebase/firebase' // TODO: consider if we want to hit database on startup or not
// import { setCounties } from './redux/reducers/counties/countiesActions'
import { fetchResults } from './redux/reducers/searchResults/resultsActions'
// initialize the store with some nice data
const initialState = sampleData
const store = storeFactory(initialState)

// dispatch any necessary pre-start actions

// Fill list of counties
/* database.ref('allCounties/').once('value', snapshot => {
  store.dispatch(setCounties(snapshot.val()))
})
*/

// set a couple nice window variables for testing/debug
window.store = store
window.React = React

// render the app
render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)

// get initial search results
database.ref('properties/').once('value', () => {
  store.dispatch(fetchResults())
})
