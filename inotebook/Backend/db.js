const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/?tls=false&directConnection=true' 

const connectToMongo = () =>{

    mongoose.connect(mongoURI, () => {

        console.log('connected to Mongo successfully..!')
    })
}

module.exports = connectToMongo;