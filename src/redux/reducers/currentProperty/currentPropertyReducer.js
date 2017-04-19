/*
 * Created by Thomas Hartmann
 * Reducer for current property
 */

import types from './currentPropertyActionTypes'

export const currentProperty = (state = {}, action) =>
  action.type === types.CHANGE_PROPERTY
    ? action.payload
    : state

export default currentProperty