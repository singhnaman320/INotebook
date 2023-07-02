const mongoose = require('mongoose');

// From mongoose schema: https://mongoosejs.com/docs/guide.html

const NotesSchema = new Schema({
 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: 'General'
    },
    date: {
        type: Date,
        default: Date.now // Do not call it like Date.now() because we will provide it at the time of insertion in MongpDB
    },

});

module.exports = mongoose.model('notes', NotesSchema) // creating model from given exchema and export it. we will use it in routes