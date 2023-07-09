import React, { useState } from 'react'

const Login = () => {

  const [credentials, setCredentials] = useState({email: "", password: ""})  

  const handleSubmit = async(e) =>{

    e.preventDefault();

    // API call
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password}),
      });

      const json = await response.json();
      console.log(json);
  } 

  const onChange = (event) =>{
    // ... -> spread operator

    // means all the values which is inside this note object will be there but the properties written after that must be overwritten 
    setCredentials({...credentials, [event.target.name]: event.target.value});
  }

  return (
    <div>
        <form  onSubmit={handleSubmit}>  {/* On submit will be form not button */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credentials.email} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={credentials.password}/>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
        </form>
    </div>
  )
}

export default Login
