import React, { useState } from "react";
import './signform.css';
import { useNavigate } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import { useDispatch } from 'react-redux';
import { createDonor } from '../features/donor/donorsSlice';

function SignInForm() {

  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate()

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDonor({
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
      role: "donor"
    }));
  };

  return (
    <>
      <NavBar elements={[]} />
      <div className="form-container">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
            required
          />

          <input type="submit" value="Sign Up" />

          <div>
            <button onClick={() => { navigate("/login") }}>Already registered? Go to login.</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignInForm;

