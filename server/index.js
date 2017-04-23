/*
 * Created by Thomas Hartmann
 * The server index file
 */
'use strict'

const app = require('./app')
const sendMail = require('./mailservice/mailHandler')


const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})

sendMail()