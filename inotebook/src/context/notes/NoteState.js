import noteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

    const state1 = {

        "name" : "Naman",
        "education" : "Engineering"

    }

    const [state, setState] = useState(state1)

    const update = () => {

        setTimeout(() => {

            setState({

                "name" : "Kaushik",
                "education" : "CS Engineering"

            })
            
        }, 2000);
    }

    return(

        <noteContext.Provider value = {{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;