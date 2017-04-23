/*
 * @flow
 * Created by Thomas Hartmann
 * Actions for user bookings
 */

import types from './bookingActionTypes'
import { addBookingToDatabase } from '../../../firebase/queries'
import { formatDate } from '../../../helperFunctions/formatting'


export const selectProperty = (property) => ({ type: types.SELECT_PROPERTY, payload: property })

export const processForm = (values) => (dispatch, getState) => {
  const { branch, date, time, name, email, number } = values

  const payload = {
    'name': name,
    'email': email,
    'phoneNumber': number
  }

  const dateFormatted = formatDate(date)


  dispatch(addBookingToDatabase(branch, dateFormatted, time, payload))
}
