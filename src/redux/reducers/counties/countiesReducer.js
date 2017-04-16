/*
 * Created by Thomas Hartmann
 * Counties reducers
 */

import types from './countiesActionTypes'
// import { combineReducers } from 'redux'

export const setCounties = (state = [], action) => action.type === types.SET_COUNTIES ? action.payload : state

/* export const fetchCounties = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_COUNTIES:
      return true
    case types.CANCEL_FETCHING_COUNTIES:
      return false
    default:
      return state
  }
} */

export default setCounties
