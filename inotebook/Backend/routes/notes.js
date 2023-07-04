const express = require('express') // import
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');

// ROUTE-1: Fetch all the notes using GET: "/api/auth/fetchallnotes". Login required
router.get('/fetchallnotes', fetchUser, async (req, res) =>{

    const notes = await Notes.find({user: req.user.id})
    res.json(notes);
})

// ROUTE-2: Add a new Note using POST: "/api/auth/addnote". Login required
router.get('/addnote', fetchUser, [
    // Validations are to be written here in routes
    body('title', 'Enter a valid title.!').isLength({min : 3}),
    body('description', 'Description must be at least of 10 character.!').isLength({min : 10})
    ], async (req, res) =>{

    
    res.json(notes);
})

module.exports = router