/*
 * Created by Thomas Hartmann
 * Actions for the current property
 */

import types from './currentPropertyActionTypes'

export const changeProperty = (newProperty) => ({ type: types.CHANGE_PROPERTY, payload: newProperty })