import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashboard = ({user}) => {
  if(!user){
    return (
      <>
        <h1>Sign in first!</h1>
        <Link to = 'signin'>Log In</Link>
      </>
    );
  }
  return (
    <>
      <h4>Hello, {user.name}</h4>
      <Outlet />
    </>
  );
};
export default Dashboard;
