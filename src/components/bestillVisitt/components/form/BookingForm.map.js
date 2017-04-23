/*
 * Created by Thomas Hartmann
 * Maps the redux form to the contact form
 */

import { connect } from 'react-redux'
import Form from './BookingForm'

const mapDispatchToProps = dispatch => ({
  handleSubmit (values) {
    console.log(values)
  },
  handleDate (date) {
    console.log('the new date is: ' + JSON.stringify(date))
  },
  handleBranch (branch) {
    console.log('the new branch is ' + JSON.stringify(branch))
  }
})

export default connect(null, mapDispatchToProps)(Form)