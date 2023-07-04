const express = require('express') // import
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')

// ROUTE-1: Fetch all the notes using GET: "/api/auth/fetchallnotes". Login required
router.get('/fetchallnotes', fetchUser, async (req, res) =>{

    const notes = await Notes.find({user: req.user.id})
    res.json(notes);
})

// ROUTE-2: Add a new Note using POST: "/api/auth/addnote". Login required
router.get('/addnote', fetchUser, async (req, res) =>{

    
    res.json(notes);
})

module.exports = router