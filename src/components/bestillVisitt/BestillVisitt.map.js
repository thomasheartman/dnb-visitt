/*
 * Created by Thomas Hartmann
 * Component for mapping state of the app to the reserve Visit page
 */

import { connect } from 'react-redux'
import BestillVisitt from './BestillVisitt'

const mapStateToProps = state => ({
  streetName: state.booking.property.streetName,
  streetNumber: state.booking.property.streetNumber,
  image: state.booking.property.image
})

export default connect(mapStateToProps)(BestillVisitt)