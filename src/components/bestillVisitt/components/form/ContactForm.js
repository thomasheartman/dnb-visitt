/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const ContactForm = ({ handleSubmit, input, pristine, submitting, reset }) => (

  <form onSubmit={(event, values) => {
    event.preventDefault()
    handleSubmit(values)
  }}>
    <Field name='name' type='text' floatingLabelText='Navn' hintText='Fornavn Etternavn' component={TextField} /><br />
    <Field name='number' type='number' floatingLabelText='Nummer' hintText='Telefonnummer' component={TextField} /><br />
    <Field name='email' type='email' floatingLabelText='Epost' hintText='Epost' component={TextField} /><br />
    <Field name='message' type='text' cols={50} rows={5} floatingLabelText='Din beskjed' hintText='Har du et spørsmål?' multiLine component={TextField} />
    <br />
     <Field name='email' type='checkbox' floatingLabelText='Epost' hintText='Epost' component={TextField} /><br />
    <br />
    <input type='submit' value='Send' disabled={pristine || submitting} />
  </form>
) 

export default reduxForm({ form: 'contactForm' })(ContactForm)
