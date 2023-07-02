const mongoose = require('mongoose');

// From mongoose schema: https://mongoosejs.com/docs/guide.html

const blogSchema = new Schema({
 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
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