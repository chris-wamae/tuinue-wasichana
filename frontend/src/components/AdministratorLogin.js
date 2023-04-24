import React, { useState } from 'react';
import './AdministratorLogin.css';
import NavBar from './navbar/NavBar';
import { useNavigate } from 'react-router-dom';

function AdministratorLogin(){
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/admin")
    console.log('Username:', username, 'Password:', password);
    // Perform login logic here, e.g., call API to authenticate user
  };

  return (
    <>
    <NavBar elements={[]}/>
    <div className="administrator-login">
      <h3>Administrator Login</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">USERNAME:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default AdministratorLogin;
