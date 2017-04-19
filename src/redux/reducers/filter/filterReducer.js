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

export const numberOfBedrooms = (state = [], action) => {
  switch (action.type) {
    case types.ADD_BEDROOM_OPTION: // for adding an option to the array
      return [...state, action.payload]
    case types.REMOVE_BEDROOM_OPTION: // removing options
      return state.filter((option) => option !== action.payload)
    case types.CLEAR_BEDROOMS: // clear all
      return []
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
  numberOfBedrooms
})
