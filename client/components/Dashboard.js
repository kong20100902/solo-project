import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';
const Dashboard = ({user, setUser}) => {

  useEffect(() => {
    
    fetch('/api/getsession')
      .then(res => res.json())
      .then(res => {
        setUser(res);
        console.log(user);
      })
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
      <h4>Welcome, {user.fn + ' ' + user.ln + ' '}</h4>
      <CreateOrder user = {user} />
      <OrderList user = {user} />
    </>
  );
  
};
export default Dashboard;
