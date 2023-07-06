// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavBar/>
          <h1>INotebook - Your personal notebook</h1>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
