import React, { useState } from 'react';
// import './signform.css';

function SignForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleSignupForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="App">
      <div className={`forms ${showSignup ? 'show-signup' : ''}`}>
        <form>
          <input type="email" placeholder="Email" />
          <input
            type={showPassword ? 'text' : 'password'}
            className="password"
            placeholder="Password"
          />
          <i
            className={`eye-icon bx ${
              showPassword ? 'bx-hide' : 'bx-show'
            }`}
            onClick={togglePasswordVisibility}
          ></i>
          <button type="submit">Login</button>
        </form>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input
            type={showPassword ? 'text' : 'password'}
            className="password"
            placeholder="Password"
          />
          <i
            className={`eye-icon bx ${
              showPassword ? 'bx-hide' : 'bx-show'
            }`}
            onClick={togglePasswordVisibility}
          ></i>
          <button type="submit">Sign Up</button>
        </form>
        <div className="links">
          <a href="#" className="link" onClick={toggleSignupForm}>
            Sign Up
          </a>
          <a href="#" className="link">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignForm;
