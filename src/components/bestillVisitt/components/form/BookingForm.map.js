/*
 * @flow
 * Created by Thomas Hartmann
 * Maps the redux form to the contact form
 */

import { connect } from 'react-redux'
import Form from './BookingForm'
import { reduxForm, formValueSelector } from 'redux-form'
import { processForm } from '../../../../redux/reducers/booking/bookingActions'
import { updateSchedule } from '../../../../redux/reducers/bookingSchedule/bookingScheduleActions'


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
  fetchSchedule (branch: string, date: Date) {
    dispatch(updateSchedule(branch, date))
  }
})

const reduxConnectedForm = reduxForm({
  form: 'bookingForm'
  // destroyOnUnmount: false
})(Form)

const selector = formValueSelector('bookingForm')

const mapStateToProps = state => ({
  date: selector(state, 'date'),
  branch: selector(state, 'branch'),
  DateTimeFormat: DateTimeFormat,
  schedule: state.bookingSchedule.appointments || [],
  client: state.booking.client
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxConnectedForm)