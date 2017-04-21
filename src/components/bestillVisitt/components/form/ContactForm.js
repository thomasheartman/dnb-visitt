/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, DatePicker, TimePicker, SelectField, MenuItem} from 'redux-form-material-ui'



const ContactForm = ({ handleSubmit, input, pristine, submitting, reset }) => (

  <form onSubmit={(event, values) => {
    event.preventDefault()
    handleSubmit(values)
  }}>
    <Field name='DatePicker' mode="landscape" floatingLabelText='Velg dato' hintText='Velg dato' component={DatePicker} />
    <Field name='TimePicker' floatingLabelText='Velg tid' hintText='Velg tid' component={TimePicker} format={null} props={{format: "24hr"}}/><br />
 
    <br />
    <Field name='name' type='text' floatingLabelText='Navn' hintText='Fornavn Etternavn' component={TextField} /><br />
    <Field name='number' type='number' floatingLabelText='Nummer' hintText='Telefonnummer' component={TextField} /><br />
    <Field name='email' type='email' floatingLabelText='Epost' hintText='Epost' component={TextField} /><br /> 
    <br />
    <input type='submit' value='Bestill Visitt' disabled={pristine || submitting} />
  </form>
) 

export default reduxForm({ form: 'contactForm' })(ContactForm)
