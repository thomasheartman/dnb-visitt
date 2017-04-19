/*
 * Created by Thomas Hartmann
 * Actions for the dropDownCounty part of state
 */
import types from './dropDownCountyActionTypes'

export const setDropDownCounty = (newCounty) => ({ type: types.SET_DROP_DOWN_COUNTY, payload: newCounty })