// This is backend part and act as a seperate unit

const connectToMongo = require('./db')

connectToMongo();

// From : [https://expressjs.com/en/starter/hello-world.html]
const express = require('express')

// Availables Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Run with nodemon by installing nodemon by [npm i -D nodemon]
// For running: nodemon .\index.js
// This index.js is express server

