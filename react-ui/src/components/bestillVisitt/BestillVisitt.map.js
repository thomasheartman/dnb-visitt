/*
 * Created by Thomas Hartmann
 * Component for mapping state of the app to the reserve Visit page
 */

import { connect } from 'react-redux'
import BestillVisitt from './BestillVisitt'
import { getProperty } from '../../redux/reducers/currentProperty/currentPropertyActions'
import _ from 'lodash'

const mapStateToProps = state => {
  const property = state.currentProperty.propertyData

  const addressString = `${property.streetName} ${property.streetNumber}`
  const fullAddressString = property.apartmentNumber
    ? addressString.concat(`, leilighet ${property.apartmentNumber}`)
    : addressString

  return ({
    bookingCompleted: !_.isEmpty(state.booking.property),
    id: property.id,
    fetching: state.currentProperty.fetchingProperty,
    address: fullAddressString,
    image: property.image
  })
}

const mapDispatchToProps = dispatch => ({
  fetchProperty (id) {
    dispatch(getProperty(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BestillVisitt)
