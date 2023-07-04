const express = require('express') // import
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

// ROUTE-1: Fetch all the notes using GET: "/api/auth/fetchallnotes". Login required (Token must aslo be sent with he headers)
router.get('/fetchallnotes', fetchUser, async (req, res) =>{

    try {
        const notes = await Note.find({user: req.user.id})
        res.json(notes);

    } catch (error) {
        
        console.log(error.message)
        res.status(500).send("Some error occured..!");
    }
    
})

// ROUTE-2: Add a new Note using POST: "/api/auth/addnote". Login required (Token must aslo be sent with he headers)
router.post('/addnote', fetchUser, [
    // Validations are to be written here in routes
    body('title', 'Enter a valid title.!').isLength({min : 3}),
    body('description', 'Description must be at least of 10 character.!').isLength({min : 5})
    ], async (req, res) =>{

    try {
        
        const{title, description, tag} = req.body;   
    
        // if there are errors, return bad request and the errors
        const result = validationResult(req)
        if(!result.isEmpty()){
            return res.status(400).json({errors: result.array()});
        }       

        // Creating new note
        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNotes = await note.save();

        res.json(savedNotes);

    } catch (error) {
        
        console.log(error.message)
        res.status(500).send("Some error occured..!");
    } 
})

module.exports = router