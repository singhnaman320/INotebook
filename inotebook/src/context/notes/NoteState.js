import noteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const notesInitial = [
        {
          "_id": "64a4388a7352480e0b900812",
          "user": "64a3c68b181958b6c96ab250",
          "title": "React JS Advanced",
          "description": "Advanced React JS is used to make better frontend application",
          "tag": "Advanced Frontend programming",
          "date": "2023-07-04T15:19:38.195Z",
          "__v": 0
        },
        {
          "_id": "64a5463e2d9138e21d8e07f40",
          "user": "64a3c68b181958b6c96ab250",
          "title": "React JS",
          "description": "React is used to make better frontend application",
          "tag": "Frontend programming",
          "date": "2023-07-05T10:30:22.356Z",
          "__v": 0
        },
        {
          "_id": "64a5463e2d91438e21d8e7f40",
          "user": "64a3c68b181958b6c96ab250",
          "title": "React JS",
          "description": "React is used to make better frontend application",
          "tag": "Frontend programming",
          "date": "2023-07-05T10:30:22.356Z",
          "__v": 0
        },
        {
          "_id": "64a5463e2d9138e21d58e7f40",
          "user": "64a3c68b181958b6c96ab250",
          "title": "React JS",
          "description": "React is used to make better frontend application",
          "tag": "Frontend programming",
          "date": "2023-07-05T10:30:22.356Z",
          "__v": 0
        },
        {
          "_id": "64a5463e2d91378e21d8e7f40",
          "user": "64a3c68b181958b6c96ab250",
          "title": "React JS",
          "description": "React is used to make better frontend application",
          "tag": "Frontend programming",
          "date": "2023-07-05T10:30:22.356Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(notesInitial)

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
        const json = response.json();

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
        // const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
        //   },
        //   body: JSON.stringify(data),
        // });
        // const json = response.json();

        console.log("Deleting the note with id: " + id)
        const newNotes = notes.filter((note) =>{return note._id !== id})
        setNotes(newNotes);
      }

      // Edit a note
      const editNote = async(id, title, description, tag) => {

        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
          },
          body: JSON.stringify(title, description, tag),
        });
        const json = response.json();
      
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

        <noteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;