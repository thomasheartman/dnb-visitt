/*
 * Created by Thomas Hartmann
 * The contact form for the contact us page
 */
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ContactForm = ({ handleSubmit, input, pristine, submitting, reset }) => (

  <form onSubmit={(event, values) => {
    event.preventDefault()
    handleSubmit(values)
  }}>
    <p>Navn:</p>
    <Field name='name' type='text' placeholder='Navn Navnesen' component='input' />
    <p>Nummer:</p>
    <Field name='number' type='number' placeholder='99900999' component='input' />
    <p>Email:</p>
    <Field name='email' type='email' placeholder='meg@eksempel.no' component='input' />

    <p>Din beskjed:</p>
    <Field name='message' type='text' cols='50' rows='5' placeholder='Hva kan vi hjelpe deg med?' component='textarea' />
    <br />
    <input type='submit' value='Send' disabled={pristine || submitting} />
  </form>
)

export default reduxForm({ form: 'contactForm' })(ContactForm)
