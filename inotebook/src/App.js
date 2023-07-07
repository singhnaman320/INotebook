// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { Alert } from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      {/* All variables of Notestate will be available every component here */}
      <NoteState>
        <Router>
          <NavBar />
          <Alert message = "Welcome to INotebook "/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
