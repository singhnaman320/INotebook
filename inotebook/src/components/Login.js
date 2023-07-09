import React from 'react'

const Login = () => {
  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password"/>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
        </form>
    </div>
  )
}

export default Login
