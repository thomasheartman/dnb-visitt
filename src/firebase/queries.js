/*
 * @flow
 * Created by Thomas Hartmann
 * A file containing database queries
 */
import { database} from './firebase'
import { formatDate } from '../helperFunctions/formatting'
import { addBooking } from '../redux/reducers/bookingSchedule/bookingScheduleActions'

export const addBookingToDatabase = (branch: string, date: Date, time: string, details: object) => {
  const dateFormatted = formatDate(date)

  const ref = database.ref(`appointments/${branch}/${dateFormatted}/${time}`)

  ref.once('value')
    .then(snapshot => {
      if (snapshot.val() !== null) {
        throw new Error('Den valgte tiden er ikke ledig')
      }
      ref.set(details)
    })
    .catch(err => alert(err.message))
}

export const getSchedule = (branch: string, date: Date) => dispatch =>{

  console.log(`Inputdata: ${branch}, ${date}`)

  const dateFormatted = formatDate(date)

  const ref = database.ref(`appointments/${branch}/${dateFormatted}`)

  console.log('About to hit the base!')

  ref.on('child_added', snapshot => {
    if (snapshot.val() !== null) {
      console.log(snapshot.key)
      dispatch(addBooking(snapshot.key))
    }
  })
}