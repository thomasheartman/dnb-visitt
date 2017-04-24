/*
 * Created by Thomas Hartmann
 * A file containing database queries
 */
import { database } from './firebase'
import { addBooking } from '../redux/reducers/bookingSchedule/bookingScheduleActions'
import { saveBooking } from '../redux/reducers/booking/bookingActions'
import { composeMail } from '../mailHandler/mailHandler'

// TODO: heavy refactoring, think about separation of concerns etc.
const createMailSubject = (date, time, branch) => `Din bestilling av Visitt: ${branch}, ${date}, ${time}`

const mailHTML = (date, time, branch) => `<div>Din bestilling av Visitt: ${branch}, ${date}, ${time}</div>`

export const addBookingToDatabase = (branch, date, time, details) =>
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
      .then(() => composeMail({
        to: details.email,
        subject: createMailSubject(date, time, branch),
        html: mailHTML(date, time, branch)
      }))
      .catch(err => alert(err.message))
  }

export const getSchedule = (branch, date) => dispatch => {

  const ref = database.ref(`appointments/${branch}/${date}`)

  ref.on('child_added', snapshot => {
    if (snapshot.val() !== null) {
      dispatch(addBooking(snapshot.key))
    }
  })
}

export const addSupportInquiry = (name, email, phoneNumber, message) => {
  const ref = database.ref('inquiries')

  ref.push().set({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
    message: message
  })
  .catch(err => alert(err.message))
}
