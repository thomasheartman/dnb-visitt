/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import React from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

const ContactForm = ({ handleSubmit, input, pristine, submitting, reset }) => (

  <form className="col-xs-12 col-sm-4" onSubmit={(event, values) => {
    event.preventDefault()
    handleSubmit(values)
  }}>
    <Field name='name' type='text' floatingLabelText='Navn' hintText='Navn Navnesen' component={TextField} /><br />
    <Field name='number' type='number' floatingLabelText='Nummer' hintText='90909090' component={TextField} /><br />
    <Field name='email' type='email' floatingLabelText='Epost' hintText='inger.frosland@dnb.no' component={TextField} /><br />
    <Field name='message' type='text' cols={50} rows={5} floatingLabelText='Din beskjed' hintText='Hva kan vi hjelpe deg med?'
      multiLine component={TextField} /><br />

    <br />
    <input type='submit' value='Send' disabled={pristine || submitting} />
  </form>
)

export default ContactForm
