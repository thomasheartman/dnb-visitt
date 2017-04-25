/*
 * Created by Thomas Hartmann
 * Functions related to the contact form
 */
import { composeMail } from '../../../../../mailHandler/mailHandler'
import { addSupportInquiry } from '../../../../../firebase/queries'

const subject = 'Din henvendelse til DNB Visitt'

const html = (name, message) => (
  `<h2>Hei, ${name},</h2>

  <p>Vi takker for din hendvendelse til DNB Visitt. Vi vil forsøke å svare deg så snart som mulig.</p>

  <p>Din melding: ${message}</p>
  `)

export const confirmEnquiry = ({ email, name, phoneNumber, message }) => {
  composeMail({ to: email, from: 'support@dnb-visitt.no', subject: subject, html: html(name, message) })
  addSupportInquiry(name, email, phoneNumber, message)
}
