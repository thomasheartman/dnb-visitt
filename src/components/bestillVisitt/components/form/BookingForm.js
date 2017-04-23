/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { TextField, DatePicker, SelectField } from 'redux-form-material-ui'
import branches from './branchValues/branches'
import hours from './branchValues/openingHours'

const BookingForm = ({ handleSubmit, input, pristine, submitting, reset }) => (

  <form onSubmit={(event, values) => {
    event.preventDefault()
    handleSubmit(values)
  }}>

    <Field component={SelectField}
      name='branch' type='text'
      floatingLabelText='Filial'
      hintText='Hvor vil du på visitt?'
    >
      {branches.map((branch) =>
        <MenuItem value={branch} key={branch} primaryText={branch} />
      )}
    </Field>

    <Field component={DatePicker}
      name='date' format={null}
      mode='landscape'
      floatingLabelText='Velg dato'
      hintText='Velg dato'
      autoOk={true}
      shouldDisableDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />

    <Field component={SelectField}
      name='time' type='text'
      floatingLabelText='Klokkeslett'
      hintText='Når vil du på visitt?'
    >
      {hours.map((hour) =>
        <MenuItem value={hour} key={hour} primaryText={hour} />
      )}
    </Field>

    <Field name='name' type='text' floatingLabelText='Navn' hintText='Fornavn Etternavn' component={TextField} />
    <Field name='number' type='number' floatingLabelText='Nummer' hintText='Telefonnummer' component={TextField} />
    <Field name='email' type='email' floatingLabelText='Epost' hintText='Epost' component={TextField} />

    <input type='submit' value='Bestill Visitt' disabled={pristine || submitting} />
  </form>
)

export default reduxForm({ form: 'bookingForm' })(BookingForm)
