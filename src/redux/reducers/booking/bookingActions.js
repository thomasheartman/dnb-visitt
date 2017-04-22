/*
 * Created by Thomas Hartmann
 * Actions for user bookings
 */

import types from './bookingActionTypes'

export const selectProperty = (property) => ({ type: types.SELECT_PROPERTY, payload: property })
