const mongoose = require('mongoose');

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

module.exports = mongoose.model('user', UserSchema) // creating model from given exchema and export it. we will use it in routes