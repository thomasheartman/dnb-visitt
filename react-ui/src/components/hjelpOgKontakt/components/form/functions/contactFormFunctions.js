/*
 * Created by Thomas Hartmann
 * Functions related to the contact form
 */
import { composeMail } from '../../../../../mailHandler/mailHandler'

const subject = 'Din henvendelse til DNB Visitt'

const html = (name) => (
  `<h2>Hei, ${name},</h2>

  <p>Vi takker for din hendvendelse til DNB Visitt. Vi vil forsøke å svare deg så snart som mulig.</p>
  `)

export const confirmEnquiry = ({email, message}) => {
  composeMail({ to: email, from: 'support@dnb-visitt.no', subject: subject, html: html(message)})
}