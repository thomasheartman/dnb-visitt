/*
 * @flow
 * Created by Thomas Hartmann
 * Maps the redux form to the contact form
 */

import { connect } from 'react-redux'
import Form from './BookingForm'
import { reduxForm, formValueSelector } from 'redux-form'
import { processForm } from '../../../../redux/reducers/booking/bookingActions'
import { getSchedule } from '../../../../firebase/queries'


// For supporting norwegian dates
import areIntlLocalesSupported from 'intl-locales-supported';
import IntlPolyfill from 'intl'
require('intl/locale-data/jsonp/nb-NO')

const DateTimeFormat = areIntlLocalesSupported(['nb-NO'])
  ? global.Intl.DateTimeFormat
  : IntlPolyfill.DateTimeFormat

const mapDispatchToProps = dispatch => ({
  onSubmit (values) {
    dispatch(processForm(values))
  },
  handleDate (date) {
    console.log('the new date is: ' + JSON.stringify(date))
  },
  handleBranch (branch) {
    console.log('the new branch is ' + JSON.stringify(branch))
  },
  fetchSchedule (branch: string, date: Date) {
    dispatch(getSchedule(branch, date))
  }
})

const reduxConnectedForm = reduxForm({
  form: 'bookingForm',
  destroyOnUnmount: false
})(Form)

const selector = formValueSelector('bookingForm')

const mapStateToProps = state => ({
  date: selector(state, 'date'),
  branch: selector(state, 'branch'),
  DateTimeFormat: DateTimeFormat
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxConnectedForm)