import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const AddNote = () => {

    const context = useContext(noteContext);
    const{addNote} = context;

    const [note, setNote] = useState({title: "", description:"", tag:""})

    const handleClick = () => {

    }

    const onChange = () =>{
        // ... -> spread operator

        // means all the values which is inside this note object will be there but the properties written after that must be overwritten 
        setNote({...note, })
    }

    return (
    
        <div className="container my-3">
            <h2>|| Add your note here ||</h2>

            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" className="form-control" id="desc"  name="desc" onChange={onChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddNote
