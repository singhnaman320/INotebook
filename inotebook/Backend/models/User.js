const mongoose = require('mongoose');
const { Schema } = mongoose;

// From mongoose schema: https://mongoosejs.com/docs/guide.html

const UserSchema = new Schema({
 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Do not call it like Date.now() because we will provide it at the time of insertion in MongpDB
    },

});

const User = mongoose.model('user', UserSchema) // creating model from given exchema and export it. we will use it in routes
// Creating Indexes : This index is created along unique element, here "email". Inforce that no more than 1 user have same email. We can use it as well or 
// if don't want to create extra indexes in databse, we can write a seperate logic in auth.js
// User.createIndexes();
module.exports = User;