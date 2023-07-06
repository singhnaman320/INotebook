import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import { useEffect } from 'react';

// Using context in About
const About = () => {

  const usage = useContext(noteContext);

  useEffect(() => {
    
    usage.update();

  }, [])
  

  return (
    <div>
      This is About {usage.state.name} and he is persuing {usage.state.education}
    </div>
  )
}

export default About
