/*
 * Created by Thomas Hartmann
 * Actions for user bookings
 */

import types from './bookingActionTypes'
import { database } from '../../../firebase/firebase'

export const selectProperty = (property) => ({ type: types.SELECT_PROPERTY, payload: property })

// TODO: join this and the function in openingHours.js somewhere
const pad = (number, desiredLength = 2, paddingCharacter = '0') =>
  (String(paddingCharacter).repeat(desiredLength) + String(number)).slice(String(number).length)

const formatDate = (date) => {
  const day = pad(date.getDate(), 2)
  const month = pad(date.getMonth() + 1, 2)
  const year = date.getFullYear().toString()
  const fullDate = year.concat('-', month, '-', day)
  return fullDate
}

export const processForm = (values) => (dispatch, getState) => {
  const { branch, date, time, name, email, number } = values

  const payload = {
    'name': name,
    'email': email,
    'phoneNumber': number
  }

  const dateFormatted = formatDate(date)

  const ref = database.ref(`appointments/${branch}/${dateFormatted}/${time}`)

  ref.once('value')
    .then(snapshot => {
      if (snapshot.val() !== null) {
        throw { message: 'No vacancy' }
      }
      ref.set(payload)
    })
    .catch(err => alert(err.message))
}
