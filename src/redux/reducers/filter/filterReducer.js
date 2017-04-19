/*
 * Created by Thomas Hartmann
 * A reducer for the filtering functionality
 */

import types from './filterActionTypes'
import { combineReducers } from 'redux'

export const counties = (state = [], action) => {
  switch (action.type) {
    case types.SET_COUNTY: // When we want to set a single county, e.g. the home page
      return [action.payload]
    case types.ADD_COUNTY: // for adding counties to the array
      return [...state, action.payload]
    case types.REMOVE_COUNTY: // removing counties
      return state.filter((county) => county !== action.payload)
    case types.CLEAR_COUNTIES: // clear all
      return []
    default:
      return state
  }
}

const minPrice = (state = 0, action) => action.type === types.SET_MIN_PRICE ? action.payload : state
const maxPrice = (state = 0, action) => action.type === types.SET_MAX_PRICE ? action.payload : state

const minSize = (state = 0, action) => action.type === types.SET_MIN_SIZE ? action.payload : state
const maxSize = (state = 0, action) => action.type === types.SET_MAX_SIZE ? action.payload : state

// TODO: turn into array like counties
export const numberOfBedrooms = (state = ) =>

const one = (state = false, action) => {
  switch (action.type) {
    case types.SELECT_ONE:
      return true
    case types.DESELECT_ONE:
      return false
    default:
      return state
  }
}

const two = (state = false, action) => {
  switch (action.type) {
    case types.SELECT_TWO:
      return true
    case types.DESELECT_TWO:
      return false
    default:
      return state
  }
}

const threePlus = (state = false, action) => {
  switch (action.type) {
    case types.SELECT_THREE_PLUS:
      return true
    case types.DESELECT_THREE_PLUS:
      return false
    default:
      return state
  }
}

export default combineReducers({
  counties,
  minPrice,
  maxPrice,
  minSize,
  maxSize,
  numberOfBedrooms: combineReducers({ one, two, threePlus })
})
