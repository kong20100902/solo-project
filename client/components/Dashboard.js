import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = ({user}) => {
  return (
    <>
      <h4>LOG IN REQUIRED!</h4>
      <Link to='/login'>Login</Link>
    </>
  );
};
export default Dashboard;
