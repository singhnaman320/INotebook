// This is backend part and act as a seperate unit

const connectToMongo = require('./db')

connectToMongo();

// From : [https://expressjs.com/en/starter/hello-world.html]
const express = require('express')
const app = express()
const port = 3000

// Availables Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Run with nodemon by installing nodemon by [npm i -D nodemon]
// For running: nodemon .\index.js
// This index.js is express server

