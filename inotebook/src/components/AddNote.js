import { React, useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const{addNote} = context;

    const [note, setNote] = useState({title: "", description:"", tag:"default"})

    const handleClick = (e) => {

        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (event) =>{
        // ... -> spread operator

        // means all the values which is inside this note object will be there but the properties written after that must be overwritten 
        setNote({...note, [event.target.name]: event.target.value});
    }

    return (
    
        <div className="container my-3">
            <h2>|| Add your note here ||</h2>

            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description"  name="description" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag"  name="tag" onChange={onChange} minLength={5} required/>
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
