import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "./navbar/NavBar";
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/authentication/authenticationSlice';


function LoginForm() {
  const navigate = useNavigate() 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole] = useState(undefined)
  
  const loginRedirect = (role) => {
   switch(role){
   case 0:
    navigate("/admin")
   break;
   case 1:
    navigate("/status")
    break;
   case 2:
      navigate("/charities")
    break;
  default:
    alert("Please log in")
   }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
    loginRedirect(role)
    // TODO: Handle form submission
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    // TODO: Handle "forgot password" button click
  };

  const handleCreateAccount = (event) => {
    event.preventDefault()
    navigate("/sign-up")
    console.log(10)
    // TODO: Handle "create new account" button click
  };

  return (
    <>
    <NavBar  elements={[]}/>
    <div className="form-container">
      <h1>Login to continue</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)   
            setRole(2)}} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        <input type="submit" value="Login" />
        <div>
          <button onClick={handleForgotPassword}>Forgot password?</button>
        </div>
        <div>
          {/* <button onClick={handleCreateAccount}>Register new account</button> */}
        </div>
      </form>
    </div>
    </>
  );
}

export default LoginForm;




