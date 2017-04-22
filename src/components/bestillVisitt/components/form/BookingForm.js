/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, DatePicker } from 'redux-form-material-ui'

const BookingForm = ({ handleSubmit, input, pristine, submitting, reset }) => (

  <form onSubmit={(event, values) => {
    event.preventDefault()
    handleSubmit(values)
  }}>
    <Field name='DatePicker' value={null} mode='landscape' floatingLabelText='Velg dato' hintText='Velg dato' component={DatePicker} />
    <Field name='name' type='text' floatingLabelText='Navn' hintText='Fornavn Etternavn' component={TextField} />
    <Field name='number' type='number' floatingLabelText='Nummer' hintText='Telefonnummer' component={TextField} />
    <Field name='email' type='email' floatingLabelText='Epost' hintText='Epost' component={TextField} />
    <input type='submit' value='Bestill Visitt' disabled={pristine || submitting} />
  </form>
)

export default reduxForm({ form: 'bookingForm' })(BookingForm)
