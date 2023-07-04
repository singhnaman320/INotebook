const express = require('express') // import
const notes = express.Router();

notes.get('/fetchallnotes', (req, res) =>{

    res.json([]);
})

module.exports = notes