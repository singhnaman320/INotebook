import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

  
  const context = useContext(noteContext);
  const{notes, getNotes} = context;

  useEffect(() => {
   
    getNotes();

  }, [])
  

  return (
    <>
      <AddNote/>
      <div className="container row my-3">
          <h2>Your Notes</h2>
          {notes.map((note) =>{

            return <NoteItem key = {note._id} note = {note}/>  // _id come from Mongodb

          })}
      </div>
    </>
  )
}

export default Notes
