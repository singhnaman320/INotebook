const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/?tls=false&directConnection=true' 

const connectToMongo = () =>{

    mongoose.connect(mongoURI, () => {

        console.log('connected to Mongo successfully..!')
    })
}

module.exports = connectToMongo;


// If this error occurs: MongooseError: Operation `users.insertOne()` buffering timed out after 10000ms
// change localhost to 127.0.0.1

// for validation: Install express validator using: npm i express-validator