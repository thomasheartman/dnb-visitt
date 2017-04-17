/*
 * Created by Thomas Hartmann
 * Actions for the filter
 */

import types from './filterActionTypes'

export const changeCounty = (newCounty) => ({ type: types.CHANGE_COUNTY, payload: newCounty })
export const clearCounty = () => ({ type: types.CLEAR_COUNTY })

// TODO: add checking for minPrice <= maxPrice
export const setMinPrice = (minPrice) => ({ type: types.SET_MIN_PRICE, payload: minPrice })
export const setMaxPrice = (maxPrice) => ({ type: types.SET_MAX_PRICE, payload: maxPrice })

export const setNumberOfBedrooms = (numberOfBedrooms) => ({ type: types.SET_NUMBER_OF_BEDROOMS, payload: numberOfBedrooms })

export const setMinSize = (minSize) => ({ type: types.SET_MIN_SIZE, payload: minSize })
export const setMaxSize = (maxSize) => ({ type: types.SET_MAX_SIZE, payload: maxSize })

export const clearFilter = () => {
  clearCounty(),
  setMinPrice(0),
  setMaxPrice(0),
  setNumberOfBedrooms(0),
  setMinSize(0),
  setMaxSize(0)
}

// TODO:find out if this is possible
/*
export default {
  changeCounty,
  clearCounty,
  setMinPrice,
  setMaxPrice,
  setNumberOfBedrooms,
  setMinSize,
  setMaxSize,
  clearFilter
}*/