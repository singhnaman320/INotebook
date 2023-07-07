import noteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

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
      const addNote = (title, description, tag) => {

        // TO DO: API CALL
        const note = {
          "_id": "64a5463e2d91378e21d8e7f40",
          "user": "64a3c68b181958b6c96ab250",
          "title": "React JS Added",
          "description": "React is used to make better frontend application Added",
          "tag": "Frontend programming",
          "date": "2023-07-05T10:30:22.356Z",
          "__v": 0
        };
        setNotes(notes.push(note));
      }

      // Delete a note
      const deleteNote = () => {
        
      }

      // Edit a note
      const editNote = () => {
        
      }

    return(

        <noteContext.Provider value = {{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;