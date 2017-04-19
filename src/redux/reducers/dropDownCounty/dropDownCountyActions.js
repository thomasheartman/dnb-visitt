/*
 * Created by Thomas Hartmann
 * Actions for the dropDownCounty part of state
 */
import types from './dropDownCountyActionTypes'
import filterTypes from '../filter/filterActionTypes'

export const setDropDownCounty = (newCounty) => ({ type: types.SET_COUNTY, payload: newCounty })