/*
 * Created by Thomas Hartmann
 * Reducer for current property
 */

import types from './currentPropertyActionTypes'
import { combineReducers } from 'redux'

export const fetchingProperty = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_PROPERTY:
      return true
    case types.CANCEL_FETCHING_PROPERTY:
    case types.CHANGE_PROPERTY:
      return false
    default:
      return state
  }
}

export const propertyData = (state = {}, action) =>
  action.type === types.CHANGE_PROPERTY
    ? action.payload
    : state

export default combineReducers({fetchingProperty, propertyData})
