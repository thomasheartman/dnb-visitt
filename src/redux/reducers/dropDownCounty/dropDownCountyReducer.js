/*
 * Created by Thomas Hartmann
 * Reducers for dropDownCounty
 */
import types from './dropDownCountyActionTypes.js'

export const dropDownCounty = (state = '', action) => action.type === types.SET_COUNTY ? action.payload : state

export default dropDownCounty