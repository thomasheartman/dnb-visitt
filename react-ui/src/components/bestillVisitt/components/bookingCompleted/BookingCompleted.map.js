/*
 * Created by Thomas Hartmann
 * A file mapping state to the booking completed page
 */
import BookingCompleted from './BookingCompleted'
import { connect } from 'react-redux'
const mapStateToProps = state => {
  const { date, time, branch, property } = state.booking
  const housingType = property.housingType

  const addressString = `${property.streetName} ${property.streetNumber}`
  const address = property.apartmentNumber
    ? addressString.concat(`, leilighet ${property.apartmentNumber}`)
    : addressString

  return ({
    date,
    time,
    branch,
    address,
    housingType
  })
}

export default connect(mapStateToProps)(BookingCompleted)
