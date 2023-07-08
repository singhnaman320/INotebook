import React, { useContext, useEffect, useRef, useState } from 'react'  // using useRef we can referone element
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {

  
  const context = useContext(noteContext);
  const{notes, getNotes} = context;

  useEffect(() => {
   
    getNotes();

  }, [])
  
  const ref = useRef(null)
  const [note, setNote] = useState({title: "", description:"", tag:"default"})

  const updateNote = (currentNote) => {

    ref.current.click();
    setNote(currentNote)
  }

  // const handleClick = (e) => {

  //   e.preventDefault();
  // }

  const onChange = (event) =>{
    // ... -> spread operator

    // means all the values which is inside this note object will be there but the properties written after that must be overwritten 
    setNote({...note, [event.target.name]: event.target.value});
  }

  return (
    <>
      <AddNote/>

      {/* Button trigger modal */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
              <form className='my-3'>
                  <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange}/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input type="text" className="form-control" id="edescription"  name="edescription" onChange={onChange}/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="tag" className="form-label">Tag</label>
                      <input type="text" className="form-control" id="etag"  name="etag" onChange={onChange}/>
                  </div>
              </form>
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
