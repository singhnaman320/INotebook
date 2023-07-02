const express = require('express') // import
const notes = express.Router();

notes.get('/', (req, res) =>{

    res.json([]);
})

module.exports = notes