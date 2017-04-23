/* global fetch */
/*
 * Created by Thomas Hartmann
 * An email handler for confirmation mails
 */
import { from, replyTo } from './defaultConfirmBookingValues'

export const confirmBooking = ({ to, subject, html }) => {
  const headers = new Headers()

  headers.append('Content-Type', 'application/json')

  fetch('/send-bekreftelse', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      from: from,
      to: to,
      subject: subject,
      replyTo: replyTo,
      html: html
    })
  })
    .then((response) => console.log(JSON.stringify(response)))
    .catch(err => alert(err))
}
