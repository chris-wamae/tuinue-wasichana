import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "./navbar/NavBar";
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/authentication/authenticationSlice';


function LoginForm() {
  const navigate = useNavigate() 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
     navigate("/amount-page")
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
      <h1>Login to view charities</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} required />
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
          <button onClick={handleCreateAccount}>Register new account</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default LoginForm;




