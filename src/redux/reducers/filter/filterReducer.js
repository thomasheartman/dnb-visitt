/*
 * Created by Thomas Hartmann
 * A reducer for the filtering functionality
 */

import types from './filterActionTypes'
import { combineReducers } from 'redux'

const county = (state = '', action) => {
  switch (action.type) {
    case types.CHANGE_COUNTY:
      return action.payload
    case types.CLEAR_COUNTY:
      return ''
    default:
      return state
  }
}

const minPrice = (state = 0, action) => action.type === types.SET_MIN_PRICE ? action.payload : state
const maxPrice = (state = 0, action) => action.type === types.SET_MAX_PRICE ? action.payload : state

const minSize = (state = 0, action) => action.type === types.SET_MIN_SIZE ? action.payload : state
const maxSize = (state = 0, action) => action.type === types.SET_MAX_SIZE ? action.payload : state

const numberOfBedrooms = (state = '', action) => action.type === types.SET_NUMBER_OF_BEDROOMS ? action.payload : state

export default combineReducers({
  county,
  minPrice,
  maxPrice,
  minSize,
  maxSize,
  numberOfBedrooms
})
