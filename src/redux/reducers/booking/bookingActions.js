/*
 * @flow
 * Created by Thomas Hartmann
 * Actions for user bookings
 */

import types from './bookingActionTypes'
import { addBookingToDatabase } from '../../../firebase/queries'
import { formatDate } from '../../../helperFunctions/formatting'


export const selectProperty = (property) => ({ type: types.SELECT_PROPERTY, payload: property })

export const setName = (name) => ({ type: types.SET_CLIENT_NAME, payload: name })

export const setEmail = (email) => ({ type: types.SET_CLIENT_EMAIL, payload: email })

export const setPhoneNumber = (phoneNumber) => ({ type: types.SET_CLIENT_PHONE_NUMBER, payload: phoneNumber })

export const setTime = (time) => ({ type: types.SET_BOOKING_TIME, payload: time })

export const setDate = (date) => ({ type: types.SET_BOOKING_DATE, payload: date })

export const setBranch = (branch) => ({ type: types.SET_BOOKING_BRANCH, payload: branch })

export const saveBooking = (bookingData) => (dispatch) => {

  const { date, time, branch, client, property } = bookingData

  console.log(`

  Bookingdata: ${JSON.stringify(bookingData)}

  Extracted values:
  date: ${date}
  time: ${time}
  branch: ${branch}
  client: ${JSON.stringify(client)}
  property: ${JSON.stringify(property)}


  `)

  dispatch(setName(client.name))
  dispatch(setEmail(client.email))
  dispatch(setPhoneNumber(client.phoneNumber))
  dispatch(setTime(time))
  dispatch(setDate(date))
  dispatch(setBranch(branch))
  dispatch(selectProperty(property))

}

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
