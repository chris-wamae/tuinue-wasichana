import React, { useState } from 'react';

function Logout() {
  const [loggedIn, setLoggedIn] = useState(true); // set initial state to logged in

  const handleLogout = () => {
    // TODO: Implement logout logic
    setLoggedIn(false); // set state to logged out
  };

  if (!loggedIn) {
    // if not logged in, redirect to login page
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;