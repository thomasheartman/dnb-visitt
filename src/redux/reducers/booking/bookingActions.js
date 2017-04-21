/*
 * Created by Thomas Hartmann
 * Actions for user bookings
 */

import { database } from '../../../firebase/firebase'
import types from './bookingActionTypes'
import { browserHistory } from 'react-router'

export const selectProperty = (property) => ({ type: types.SELECT_PROPERTY, payload: property })