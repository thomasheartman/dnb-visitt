/*
 * Created by Thomas Hartmann
 * An email handler for confirmation mails
 */
'use strict'
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')
const auth = require('./auth')

const nodemailerMailgun = nodemailer.createTransport(mg(auth))

function sendMail ({from, to, subject, replyTo, html, text}) {
  nodemailerMailgun.sendMail({
    from: from,
    to: to, // An array if you have multiple recipients.
    subject: subject,
    'h:Reply-To': replyTo,
    // You can use "html:" to send HTML email content. It's magic!
    html: html,
    // You can use "text:" to send plain-text content. It's oldschool!
    text: text
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err)
    } else {
      console.log('Response: ' + info)
    }
  })
}

module.exports = sendMail
