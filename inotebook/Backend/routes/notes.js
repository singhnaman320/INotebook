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
    body('name', 'Enter a valid name !').isLength({min: 3}),
    body('email', 'Enter a valid email !').isEmail(),
    body('password', 'Enter a valid password !').isLength({min: 8})
    ], async (req, res) =>{

    
    res.json(notes);
})

module.exports = router