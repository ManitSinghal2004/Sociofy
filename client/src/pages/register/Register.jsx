import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";
import axios from "axios"

const Register = () => {
  const [inputs , setInputs] = useState({
    username : "",
    email : "",
    password : "",
    name : "",
  })

  const [err , setErr] = useState(null);

  const handleChange = e =>{
    setInputs((prev) => ({...prev , [e.target.name] : e.target.value}));
  }
  const handleClick = async e =>{
    e.preventDefault();

    try{
      await axios.post("http://localhost:8800/api/auth/register" , inputs)
    }
    catch(err){
      setErr(err.response.data);
    }
  }
  console.log(err)
  return (
    <div className="register">
      <div className="card">
        <div className="upper">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}></input>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}></input>
            {err && err}
            <button onClick={handleClick}>Register</button> 
          </form>
        </div> 
        <div className="lower">
          <span>Already have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Register;
