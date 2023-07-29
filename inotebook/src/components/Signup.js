import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Signup = (props) => {

    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""}) 
    let history = useHistory();

    const handleSubmit = async(e) =>{
  
        e.preventDefault();
        const {name, email, password} = credentials;

        // API call
        const response = await fetch("http://localhost:5000/api/auth/createUser", {

          method: "POST",
          headers: {
            "Content-Type": "application/json"
          // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhM2M2OGIxODE5NThiNmM5NmFiMjUwIn0sImlhdCI6MTY4ODQ4MzM5OH0.OvvYw2PbMMoMCeP1jL-1vZUYrqZ8LYpJi3ycDQfTqGY"
          },
          body: JSON.stringify({name, email, password}),
        });
  
        const json = await response.json();
        console.log(json);
        if(json.success){
  
          // Save the auth token and redirect
          localStorage.setItem('token', json.authToken)
          history.push("/")
          props.showAlert("Account Created Successfully.!", "success");

        }else{
  
          props.showAlert("Invalid details.! Please check your given details", "danger");
        }
    } 
  
    const onChange = (event) =>{
      // ... -> spread operator
  
      // means all the values which is inside this note object will be there but the properties written after that must be overwritten 
      setCredentials({...credentials, [event.target.name]: event.target.value});
    }
    
    return (
        <div className='container mt-2'>
            <h2 className='my-2'>Create your account on INotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required minLength={8}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name= "cpassword" onChange={onChange} required minLength={8}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
