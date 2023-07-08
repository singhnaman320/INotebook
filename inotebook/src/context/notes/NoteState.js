import noteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const notesInitial = []

      const [notes, setNotes] = useState(notesInitial)

      // get all notes
      const getNotes = async() => {

        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
          },
        });
      
        const json = await response.json();
        console.log(json)
        setNotes(json)
      }


      // Add a note
      const addNote = async(title, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = await response.json();
        console.log(json)

        console.log("Adding a new note")

        const note = {
          "_id": "64a5463e2d91378e21d8e7f40",
          "user": "64a3c68b181958b6c96ab250",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-07-05T10:30:22.356Z",
          "__v": 0
        };
        setNotes(notes.concat(note));
      }

      // Delete a note
      const deleteNote = async(id) => {
        
        // API call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
          },
        });
        const json = await response.json();
        console.log(json);

        console.log("Deleting the note with id: " + id)
        const newNotes = notes.filter((note) =>{return note._id !== id})
        setNotes(newNotes);
      }

      // Edit a note
      const editNote = async(id, title, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
          },
          body: JSON.stringify({title, description, tag}),
        });
        const json = await response.json();
        console.log(json)
      
        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {

          const element = notes[index];
          if(element._id === id){

            element.title = title;
            element.description = description;
            element.tag = tag;

          }
          
        }
        
      }

    return(

        <noteContext.Provider value = {{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;