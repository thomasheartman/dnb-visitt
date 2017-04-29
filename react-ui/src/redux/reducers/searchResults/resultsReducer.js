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

const queuedSearch = (state = false, action) => {
  switch (action.type) {
    case types.QUEUE_SEARCH:
      return true
    case types.CLEAR_SEARCH_QUEUE:
      return false
    default:
      return state
  }
}

const results = (state = [], action) => {
  switch (action.type) {
    case types.CHANGE_RESULTS:
      return action.payload
    case types.ADD_RESULT:
      return [...state, action.payload]
    case types.CLEAR_RESULTS:
      return []
    default:
      return state
  }
}

export default combineReducers({
  fetchingResults,
  queuedSearch,
  results
})
