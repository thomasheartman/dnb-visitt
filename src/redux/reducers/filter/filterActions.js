/*
 * Created by Thomas Hartmann
 * Actions for the filter
 */

import types from './filterActionTypes'

export const setCounty = (newCounty) => ({ type: types.SET_COUNTY, payload: newCounty })

export const addCounty = (county) => ({ type: types.ADD_COUNTY, payload: county })

export const removeCounty = (county) => ({ type: types.REMOVE_COUNTY, payload: county })

export const clearCounties = () => ({ type: types.CLEAR_COUNTIES })

// TODO: add checking for minPrice <= maxPrice
export const setMinPrice = (minPrice) => ({ type: types.SET_MIN_PRICE, payload: minPrice })
export const setMaxPrice = (maxPrice) => ({ type: types.SET_MAX_PRICE, payload: maxPrice })

export const setOne = newValue => newValue ? ({ type: types.SELECT_ONE }) : ({ type: types.DESELECT_ONE })
export const setTwo = newValue => newValue ? ({ type: types.SELECT_TWO }) : ({ type: types.DESELECT_TWO })
export const setThreePlus = newValue => newValue ? ({ type: types.SELECT_THREE_PLUS }) : ({ type: types.DESELECT_THREE_PLUS })

export const setMinSize = (minSize) => ({ type: types.SET_MIN_SIZE, payload: minSize })
export const setMaxSize = (maxSize) => ({ type: types.SET_MAX_SIZE, payload: maxSize })

export const clearFilter = () => dispatch => {
  dispatch(clearCounties())
  dispatch(setMinPrice(0))
  dispatch(setMaxPrice(0))
  dispatch(setMinSize(0))
  dispatch(setMaxSize(0))
  dispatch(setOne(false))
  dispatch(setTwo(false))
  dispatch(setThreePlus(false))
}

// TODO:find out if this is possible
/*
export default {
  setCounty,
  clearCounties,
  setMinPrice,
  setMaxPrice,
  setNumberOfBedrooms,
  setMinSize,
  setMaxSize,
  clearFilter
} */
