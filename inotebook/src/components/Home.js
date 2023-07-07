// rface -> react arrow functional component with export
import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {

  return (
    <div>
      <AddNote/>
      <Notes/>
    </div>
  )
}

export default Home
