import React, { useState } from 'react';
import './AdministratorLogin.css';

const AdministratorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username, 'Password:', password);
    // Perform login logic here, e.g., call API to authenticate user
  };

  return (
    <div className="administrator-login">
      <h1>Administrator Login</h1>
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
  );
};

export default AdministratorLogin;
