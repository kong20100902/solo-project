import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UserInfo from './UserInfo';
const Dashboard = ({user, setUser}) => {

  useEffect(() => {
    
    fetch('/api/getSession')
      .then(res => res.json())
      .then(res => {
        setUser(res);
        console.log(user);
      })
      .then(res => {})
      .catch(err => console.log('GET to /api/getSession FAILED ', err));

  }, []);
    
  if(!user){
    return (
      <>
        <h1>Session expired, sign in again</h1>
        <Link to = '/signin'>Log In</Link>
      </>
    );
  }
  return (
    <>
      <h4>Hello, {user.fn + ' ' + user.ln + ' ' + user.email}</h4>
      <UserInfo user = {user} />
    </>
  );
  
};
export default Dashboard;
