// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {

  const [alert, setAlert] = useState(null) // Alert is taken as object here

  const showAlert = (message, type) =>{

    setAlert({

      msg : message,
      type : type
    })

    setTimeout(()=>{  // Alert removed by itself after 2 sec

      setAlert(null);

    }, 2000)
  }

  return (
    <>
      {/* All variables of Notestate will be available every component here */}
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert = {alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <HomePage showAlert={showAlert}/>   
              </Route>
              <Route exact path="/log">
                <Home showAlert={showAlert}/>
              </Route>
              {/* <Route exact path="/about">
                <About />
              </Route> */}
              <Route exact path="/login">
                <Login showAlert={showAlert}/>
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
      <Footer/>
    </>
  );
}

export default App;
