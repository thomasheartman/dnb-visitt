/*
 * Created by Thomas Hartmann
 * The server index file
 */

const sendMail = require('./mailservice/mailHandler')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 5000

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')))

// use body-parser for post json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Answer API requests.
app.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json')
  res.send('{"message":"Hello from the custom server!"}')
})

app.post('/send-bekreftelse', (req, res) => {
  console.log(req.body)
  sendMail(req.body)
  res.send('POST request to send-email')
})

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'))
})

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
