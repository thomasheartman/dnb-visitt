/*
 * Created by Thomas Hartmann
 * An email handler for confirmation mails
 */
'use strict';
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport')

const auth = {
  auth: {
    api_key: 'key-b690b83ce609d5ef8ab65f77491cce66',
    domain: 'sandbox8af49f77ddf74950b6faf0e16c2ab317.mailgun.org'
  }
}

function sendMail () {


  const nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: 'visitt@dnb.no',
    to: 'thomas.o.hartmann@gmail.com', // An array if you have multiple recipients.
    subject: 'Takk for din bestilling.',
    'h:Reply-To': 'dnbvisitt@gmail.com',
    //You can use "html:" to send HTML email content. It's magic!
    html: '<b>Wow Big powerful letters</b>',
    //You can use "text:" to send plain-text content. It's oldschool!
    text: 'Mailgun rocks, pow pow!'
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }

  })
}

module.exports = sendMail