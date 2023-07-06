import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

// Using context in About
const About = () => {

  const usage = useContext(noteContext);

  return (
    <div>
      This is About {usage.name}
    </div>
  )
}

export default About
