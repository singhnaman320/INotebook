import React, { useContext, useEffect, useRef } from 'react'  // using useRef we can referone element
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

    ref.current.click();
  }

  const ref = useRef(null)

  return (
    <>
      <AddNote/>

      {/* Button trigger modal */}
      <button type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
     
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Update Note</button>
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
