const express = require('express') // import
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')

// ROUTE-1: Fetch all the notes using GET: "/api/auth/fetchallnotes". Login required
notes.get('/fetchallnotes', (req, res) =>{

    res.json([]);
})

module.exports = router