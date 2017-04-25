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
import { validateDate } from './dateValidator'

class BookingForm extends React.Component {
  componentDidUpdate () {
    const { branch, date, fetchSchedule } = this.props
    if (branch && date) {
      fetchSchedule(branch, date)
    }
  }

  render () {
    const { date, branch, DateTimeFormat, schedule,
      handleSubmit, input, pristine, submitting } = this.props
    return (
      <div>
        <form onSubmit={(event, values) => {
          event.preventDefault()
          handleSubmit(values)
        }}>

          <Field component={SelectField}
            name='branch' type='text'
            floatingLabelText='Filial'
            hintText='Hvor vil du på visitt?'
            required
          >
            {branches.map((branch) =>
              <MenuItem value={branch} key={branch} primaryText={branch} style={{'color': '#333'}} />
            )}
          </Field>

          <Field component={DatePicker}
            DateTimeFormat={DateTimeFormat}
            locale='nb-NO'
            name='date' format={null}
            mode='landscape'
            floatingLabelText='Velg dato'
            hintText='Velg dato'
            autoOk
            shouldDisableDate={(date) => validateDate(date)}
            required
          />

          <Field component={SelectField}
            style={!(date && branch) ? { 'display': 'none' } : {}}
            disabled={!(date && branch)}
            name='time' type='text'
            floatingLabelText='Klokkeslett'
            hintText='Når vil du på visitt?'
            required
          >
            {hours.map((hour) =>
              <MenuItem value={hour} key={hour} primaryText={hour}
                disabled={schedule.includes(hour)}
              />
            )}
          </Field>

          <Field name='name' type='text'
            floatingLabelText='Navn'
            hintText='Fornavn Etternavn'
            component={TextField}
            required
          />
          <Field name='number' type='number'
            floatingLabelText='Nummer'
            hintText='Telefonnummer'
            component={TextField}
            required
          />
          <Field name='email' type='email'
            floatingLabelText='Epost'
            hintText='Epost'
            component={TextField}
            required
          />

          <input type='submit' value='Bestill Visitt' className='order-button'
            disabled={pristine || submitting} />
        </form>
      </div>
    )
  }
}

export default BookingForm
