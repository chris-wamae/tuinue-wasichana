import React, { useEffect, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import NavBar from "./navbar/NavBar";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/authentication/authenticationSlice';
import { selectUser } from '../features/authentication/authenticationSlice';
function LoginForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentUser = useSelector(selectUser)
  const  [role, setRole] = useState(undefined)
  useEffect(()=>{
    if(currentUser == undefined){
      console.log("loading...")
    }else{
     setRole(currentUser[0].user.role)
     loginRedirect(role)
    }

  },[currentUser])
  const loginRedirect = (role) => {
   switch(role){
   case "admin":
    navigate("/admin")
   break;
   case "charity":
    if(currentUser[0].user.status == "pending"){
      navigate("/status")
    }
    else{
      navigate("/charity-page")
    }
   
    break;
   case "donor":
      navigate("/charities")
    break;
  default:
    console.log("Invalid role")
   }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({user:{
      email:email,
      password:password
    }}))
       // console.log(currentUser)
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
          <input type="text" value={email} onChange={(event) => {setEmail(event.target.value)}} required />
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














