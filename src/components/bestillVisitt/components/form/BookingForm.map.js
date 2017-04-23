/*
 * Created by Thomas Hartmann
 * Maps the redux form to the contact form
 */

import { connect } from 'react-redux'
import Form from './BookingForm'

const mapDispatchToProps = dispatch => ({
  handleSubmit (values) {
    console.log(values)
  }
})

export default connect(null, mapDispatchToProps)(Form)