import React, { useContext, useEffect, useRef, useState } from 'react'  // using useRef we can referone element
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Notes = (props) => {

  const context = useContext(noteContext);
  let history = useHistory();
  const{notes, getNotes, editNote} = context;

  useEffect(() => {
   
    if(localStorage.getItem('token')){

      getNotes();

    }else{

      history.push("/login");
    }
    
  }, [])
  
  const ref = useRef(null)
  const refClose = useRef(null)

  const [note, setNote] = useState({id: "", etitle: "", edescription:"", etag:""})

  const updateNote = (currentNote) => {

    ref.current.click();
    setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
  }

  const handleClick = (e) => {

    console.log("Updating the note: ", note)
    editNote(note.id, note.etitle, note.edescription, note.etag);  // edit notes just before closing edit box
    refClose.current.click();
    props.showAlert("Updated Sucessfully.!", "success");
  }

  const onChange = (event) =>{
    // ... -> spread operator

    // means all the values which is inside this note object will be there but the properties written after that must be overwritten 
    setNote({...note, [event.target.name]: event.target.value});
  }

  return (
    <>
      <AddNote showAlert={props.showAlert}/>

      {/* Button trigger modal */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
     
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Query</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                  <div className="mb-3">
                      <label htmlFor="title" className="form-label">Title</label>
                      <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={5} required/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <input type="text" className="form-control" id="edescription"  name="edescription" value={note.edescription} onChange={onChange} minLength={5} required/>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="tag" className="form-label">Tag</label>
                      <input type="text" className="form-control" id="etag"  name="etag" value={note.etag} onChange={onChange} minLength={5} required/>
                  </div>
              </form>
            </div>
            <div className="modal-footer">
              <button  ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update query</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container row my-3">
          <h2>Your Queries</h2>
          <p>{notes.length === 0 && "Sorry, no notes available to display.!"}</p>  {/* When we have nothing to display in else, we use && */}
          {notes.map((note) =>{

            return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note}/>  // _id come from Mongodb

          })}
      </div>
    </>
  )
}

export default Notes
