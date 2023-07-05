// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import{BrowserRouter as Router, Switch, Route, Link}from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <h1>INotebook - Your personal notebook</h1>
        <Home/>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
