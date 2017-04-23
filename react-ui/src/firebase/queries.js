/*
 * @flow
 * Created by Thomas Hartmann
 * A file containing database queries
 */
import { database } from './firebase'
import { addBooking } from '../redux/reducers/bookingSchedule/bookingScheduleActions'
import { saveBooking } from '../redux/reducers/booking/bookingActions'

import { confirmBooking } from '../mailHandler/mailHandler'

// TODO: heavy refactoring, think about separation of concerns etc.
const createMailSubject = (date, time, branch) => `Din bestilling av Visitt: ${branch}, ${date}, ${time}`

const mailHTML = (date, time, branch) => `<div>Din bestilling av Visitt: ${branch}, ${date}, ${time}</div>`

export const addBookingToDatabase = (branch: string, date: string, time: string, details: object) =>
  (dispatch, getState) => {

    const ref = database.ref(`appointments/${branch}/${date}/${time}`)

    ref.once('value')
      .then(snapshot => {
        if (snapshot.val() !== null) {
          throw new Error('Den valgte tiden er ikke ledig')
        }
        ref.set(details)
      })
      .then(() => {
        const property = getState().currentProperty.propertyData
        dispatch(saveBooking({
          date: date,
          time: time,
          branch: branch,
          client: {
            email: details.email,
            name: details.name,
            phoneNumber: details.phoneNumber
          },
          property: property
        }))
      })
      .then(() => confirmBooking({
        to: details.email,
        subject: createMailSubject(date, time, branch),
        html: mailHTML(date, time, branch)
      }))
      .catch(err => alert(err.message))
  }

export const getSchedule = (branch: string, date: string) => dispatch => {

  const ref = database.ref(`appointments/${branch}/${date}`)

  ref.on('child_added', snapshot => {
    if (snapshot.val() !== null) {
      dispatch(addBooking(snapshot.key))
    }
  })
}