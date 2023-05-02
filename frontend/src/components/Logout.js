import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/authentication/authenticationSlice';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../features/authentication/authenticationSlice';
import "./navbar/nav-bar.css"

function Logout() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  console.log(user)

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/")
    // TODO: Implement logout logic
  };
  return (
    user ? <span id="exit" onClick={handleLogout}>X</span> : <span></span>
  );
}

export default Logout;