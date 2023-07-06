import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'

// Using context in About
const About = () => {

  const usage = useContext(noteContext);

  useEffect(() => {
    
    usage.update();

  }, [])
  

  return (
    <div>
      This is About {usage.name} and he is persuing {usage.education}
    </div>
  )
}

export default About
