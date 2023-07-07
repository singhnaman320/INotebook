import React from 'react'

const NoteItem = (props) => {

  const {note} = props;  
  return (
    <div className='col-md-3'>
        <div className="card my-3">
            <div className="card-body">
              <div className='d-flex align-items-center'>
                <h5 className="card-title">{note.title}</h5>
                <i className="fa-sharp fa-solid fa-trash mx-2"></i> {/* For delete icon */}
                <i className="fa-solid fa-pen-to-square mx-2"></i> {/* For edit icon from*/}
              </div>
              <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>
  )
}

export default NoteItem
