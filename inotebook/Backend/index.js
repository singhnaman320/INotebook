// This is backend part and act as a seperate unit
var cors = require('cors')
const express = require('express') // From : [https://expressjs.com/en/starter/hello-world.html]
const connectToMongo = require('./db')

connectToMongo();
const app = express()
const port = 5000
 
app.use(cors())

app.use(express.json()) // If we want to use request body then we have to use this middleware

// Availables Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`INotebook application listening on port ${port}`)
})


