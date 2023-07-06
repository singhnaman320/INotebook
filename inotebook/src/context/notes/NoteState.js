import NoteContext from './noteContext'

const NoteState = (props) => {

    const state = {

        "name" : "Naman",
        "Education" : "Engineering"

    }

    return(

        <NoteContext.provider value = {state}>
            {props.children}
        </NoteContext.provider>
    )
}

export default NoteState;