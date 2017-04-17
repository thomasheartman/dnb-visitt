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
import * as firebase from 'firebase'

// initialize firebase
const config = {
  apiKey: "AIzaSyDheiLwH9ZwX9EXeZ_b6M8cq3drC-ogCOo",
  authDomain: "dnb-visitt.firebaseapp.com",
  databaseURL: "https://dnb-visitt.firebaseio.com",
  projectId: "dnb-visitt",
  storageBucket: "dnb-visitt.appspot.com",
  messagingSenderId: "1091924579708"
};
firebase.initializeApp(config);

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
    <Routes />
  </Provider>,
  document.getElementById('root')
)
