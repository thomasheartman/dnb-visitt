/*
 * Created by Thomas Hartmann
 * Actions for the filter
 */

import types from './filterActionTypes'
import limits from '../../../components/boligvelger/components/filter/filterLimits'

export const setCounty = (newCounty) => ({ type: types.SET_COUNTY, payload: newCounty })

export const addCounty = (county) => ({ type: types.ADD_COUNTY, payload: county })

export const removeCounty = (county) => ({ type: types.REMOVE_COUNTY, payload: county })

export const clearCounties = () => ({ type: types.CLEAR_COUNTIES })


export const setMinPriceHard = (minPrice) => ({ type: types.SET_MIN_PRICE, payload: minPrice })
export const setMaxPriceHard = (maxPrice) => ({ type: types.SET_MAX_PRICE, payload: maxPrice })

// Adjusts the price dynamically by making sure it does not exceed max price
export const setMinPrice = (minPrice) => (dispatch, getState) => {
  if (getState().filter.maxPrice < minPrice) dispatch(setMaxPriceHard(minPrice))
  dispatch(setMinPriceHard(minPrice))
}

export const setMaxPrice = (maxPrice) => (dispatch, getState) => {
  if (getState().filter.minPrice > maxPrice) dispatch(setMinPriceHard(maxPrice))
  dispatch(setMaxPriceHard(maxPrice))
}

export const setMinSizeHard = (minSize) => ({ type: types.SET_MIN_SIZE, payload: minSize })
export const setMaxSizeHard = (maxSize) => ({ type: types.SET_MAX_SIZE, payload: maxSize })

export const setMinSize = (minSize) => (dispatch, getState) => {
  if (getState().filter.maxSize < minSize) dispatch(setMaxSizeHard(minSize))
  dispatch(setMinSizeHard(minSize))
}

export const setMaxSize = (maxSize) => (dispatch, getState) => {
  if (getState().filter.minSize > maxSize) dispatch(setMinSizeHard(maxSize))
  dispatch(setMaxSizeHard(maxSize))
}

export const addBedroomOption = (newOption) => ({ type: types.ADD_BEDROOM_OPTION, payload: newOption })
export const removeBedroomOption = (option) => ({ type: types.REMOVE_BEDROOM_OPTION, payload: option })
export const clearBedroomOptions = () => ({ type: types.CLEAR_BEDROOMS })

export const setOne = newValue => newValue ? ({ type: types.SELECT_ONE }) : ({ type: types.DESELECT_ONE })
export const setTwo = newValue => newValue ? ({ type: types.SELECT_TWO }) : ({ type: types.DESELECT_TWO })
export const setThreePlus = newValue => newValue ? ({ type: types.SELECT_THREE_PLUS }) : ({ type: types.DESELECT_THREE_PLUS })


export const clearFilter = () => dispatch => {
  dispatch(clearCounties())
  dispatch(setMinPriceHard(0))
  dispatch(setMaxPriceHard(limits.MAX_PRICE))
  dispatch(setMinSizeHard(0))
  dispatch(setMaxSizeHard(limits.MAX_SIZE))
  dispatch(clearBedroomOptions())
}