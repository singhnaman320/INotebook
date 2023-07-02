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

});