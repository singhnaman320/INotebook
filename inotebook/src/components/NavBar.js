import {React} from 'react'
import { Link , useLocation} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const NavBar = () =>{

  let history = useHistory();  
  const handleLogout = () =>{

    localStorage.removeItem('token');
    history.push("/login")
  }

  // we have used useLocation here so that when we click on Home this will highlight and when we click on About this will highlight 
  let location = useLocation();

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>INotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to={'/about'}>About</Link>
                        </li>
                    </ul>
                    {/* If else */}
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                        <Link className="btn btn-warning" to={'/login'} role="button">Login</Link>
                        <Link className="btn btn-warning mx-2" to={'/signup'} role="button">Signup</Link>
                    </form> : <button onClick={handleLogout} className='btn btn-warning'>Logout</button>
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
