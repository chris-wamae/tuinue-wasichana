import React, { useState } from 'react';
import './CharityLogin.css';

const CharityLogin = () => {
  const [charityName, setCharityName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the login logic here (e.g., call your API, validate input, etc.)
    console.log('Charity Name:', charityName);
    console.log('Password:', password);
  };

  return (
    <div className="charity-login">
      <h1>Charity Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="charityName">CHARITY NAME:</label>
        <input
          type="text"
          id="charityName"
          value={charityName}
          onChange={(event) => setCharityName(event.target.value)}
        />

        <label htmlFor="password">PASSWORD:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default CharityLogin;
