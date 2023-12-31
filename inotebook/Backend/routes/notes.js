const express = require('express') // import
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

// ROUTE-1: Fetch all the notes using GET: "/api/notes/fetchallnotes". Login required (Token must also be sent with he headers)
router.get('/fetchallnotes', fetchUser, async (req, res) =>{

    try {
        const notes = await Note.find({user: req.user.id})
        res.json(notes);

    } catch (error) {
        
        console.log(error.message)
        res.status(500).send("Some error occured..!");
    }
    
})

// ROUTE-2: Add a new Note using POST: "/api/notes/addnote". Login required (Token must also be sent with he headers)
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

// ROUTE-3: Update a existing Note using PUT: "/api/notes/updatenote". Login required (Token must also be sent with he headers)
router.put('/updatenote/:id', fetchUser, async (req, res) =>{

    try {
       
        const {title, description, tag} = req.body

        // create a new object
        const newNote = {};
        if(title){newNote.title = title}
        if(description){newNote.description = description}
        if(tag){newNote.tag = tag}

        // Find the note to be update and update it
        let note = await Note.findById(req.params.id) // It is params id ":id"
        if(!note){return res.status(400).send("Sorry, Note not found.!")}

        // Checking particular user own this note or not
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Sorry, You are not authorized to access this note!")
        }

        // Update
        note = await Note.findByIdAndUpdate(req.params.id, {$set : newNote}, {new : true}) // {new : true} means if new contact come then it will also be created
        res.json({note})

    } catch (error) {
        
        console.log(error.message)
        res.status(500).send("Some error occured..!");
    } 
})

// ROUTE-4: Delete a existing Note using DELETE: "/api/notes/deletenote". Login required (Token must also be sent with he headers)
router.delete('/deletenote/:id', fetchUser, async (req, res) =>{

    try {
       
        const {title, description, tag} = req.body

        // Find the note to be DELETED and DELETE it
        let note = await Note.findById(req.params.id) // It is params id ":id"
        if(!note){return res.status(400).send("Sorry, Note not found.!")}

        // Checking particular user own this note or not
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Sorry, You are not authorized to access this note!")
        }

        // Update
        note = await Note.findByIdAndDelete(req.params.id) // {new : true} means if new contact come then it will also be created
        res.json({"Success" : `Note has been deleted with given id ${req.params.id}`})

    } catch (error) {
        
        console.log(error.message)
        res.status(500).send("Some error occured..!");
    } 
})


module.exports = router