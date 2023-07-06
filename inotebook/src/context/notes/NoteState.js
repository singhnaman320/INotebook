import noteContext from './noteContext'

const NoteState = (props) => {

    const state = {

        "name" : "Naman",
        "Education" : "Engineering"

    }

    return(

        <noteContext.Provider value = {state}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;