/*
 * Created by Thomas on 16/04/2017.
 * Reducer for results
 */

import types from './resultsActionTypes'
import { combineReducers } from 'redux'

const fetchingResults = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_RESULTS:
      return true
    case types.CANCEL_FETCHING_RESULTS:
    case types.CHANGE_RESULTS:
      return false
    default:
      return state
  }
}

const results = (state = [], action) => action.type === types.CHANGE_RESULTS ? action.payload : state

export default combineReducers({
  fetchingResults,
  results
})
