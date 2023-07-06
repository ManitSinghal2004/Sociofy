import React, { useState , useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.scss"

const Login = ()=>{
    const [inputs , setInputs] = useState({
        username : "",
        password : "",
      })
    
      const [err , setErr] = useState(null);

      const navigate = useNavigate()
    
      const handleChange = e =>{
        setInputs((prev) => ({...prev , [e.target.name] : e.target.value}));
      }  
    const {login} = useContext(AuthContext);
    const handleLogin = async (e)=>{
        e.preventDefault();
        try{
            await login(inputs) ; 
            navigate("/")
        }
        catch(err){
            setErr(err.response.data)
        }
       
    };
    return(
        <div className="login">
            <div className="card">
                <div className="upper">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" name="username" onChange={handleChange}></input>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}></input>
                        {err && err}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
                <div className="lower">
                    <span>New to Social Media?</span>
                    <Link to="/register"><button>Register</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Login ; 