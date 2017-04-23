/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import React from 'react'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { TextField, DatePicker, SelectField } from 'redux-form-material-ui'
import branches from './branchValues/branches'
import hours from './branchValues/openingHours'

// For supporting norwegian dates
import areIntlLocalesSupported from 'intl-locales-supported';
import IntlPolyfill from 'intl'
require('intl/locale-data/jsonp/nb-NO')

const DateTimeFormat = areIntlLocalesSupported(['nb-NO'])
  ? global.Intl.DateTimeFormat
  : IntlPolyfill.DateTimeFormat

const BookingForm = ({ date, branch, handleSubmit, input, pristine, submitting, reset,
  handleDate = f => f, handleBranch = f => f }) => (

    <form onSubmit={(event, values) => {
      event.preventDefault()
      handleSubmit(values)
    }}>

      <Field component={SelectField}
        onChange={() => handleBranch(branch)}
        name='branch' type='text'
        floatingLabelText='Filial'
        hintText='Hvor vil du på visitt?'
      >
        {branches.map((branch) =>
          <MenuItem value={branch} key={branch} primaryText={branch} />
        )}
      </Field>

      <Field component={DatePicker}
        DateTimeFormat={DateTimeFormat}
        locale='nb-NO'
        onChange={() => handleDate(date)}
        name='date' format={null}
        mode='landscape'
        floatingLabelText='Velg dato'
        hintText='Velg dato'
        autoOk={true}
        shouldDisableDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />

      <Field component={SelectField}
      disabled={date && branch ? false : true}
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

export default BookingForm
