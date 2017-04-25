/*
 * Created by Thomas Hartmann
 * Maps the redux form to the contact form
 */

import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import Form from './ContactForm'
import { confirmEnquiry } from './functions/contactFormFunctions'

const mapDispatchToProps = dispatch => ({
  onSubmit (values) {
    confirmEnquiry(values)
  }
})

const reduxConnectedForm = reduxForm({
  form: 'contactForm'
})(Form)

export default connect(null, mapDispatchToProps)(reduxConnectedForm)
