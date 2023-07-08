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
  
  const updateNote = (note) => {


  }

  return (
    <>
      <AddNote/>
      {/* Button trigger modal */}
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container row my-3">
          <h2>Your Notes</h2>
          {notes.map((note) =>{

            return <NoteItem key={note._id} updateNote={updateNote} note={note}/>  // _id come from Mongodb

          })}
      </div>
    </>
  )
}

export default Notes
