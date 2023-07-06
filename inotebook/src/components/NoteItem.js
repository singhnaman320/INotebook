import React from 'react'

const NoteItem = (props) => {

  const {note} = props;  
  return (
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <i class="fa-sharp fa-solid fa-trash"></i> {/* For delete icon */}
                <i class="fa-solid fa-pen-to-square mx-2"></i> {/* For edit icon from*/}
            </div>
        </div>
    </div>
  )
}

export default NoteItem
