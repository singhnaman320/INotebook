import React from "react";
import noteContext from './noteContext'

const NoteState = (props) => {

    return(

        <NoteState.provider>
            {props.children}
        </NoteState.provider>
    )
}

export default NoteState;