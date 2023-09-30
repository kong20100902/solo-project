import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import CreateOrder from './CreateOrder';
import OrderList from './OrderList';
const Dashboard = ({user, setUser}) => {
  const [orderCount, setOrderCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    
    fetch('/api/getsession')
      .then(res => res.json())
      .then(res => {
        setUser(res);
        if(res){
          document.getElementsByTagName('body')[0].style.background = 'green';
        }
      })
      .catch(err => console.log('GET to /api/getsession FAILED ', err));

  }, []);
  
  const handleSignOut = e => {
    e.preventDefault();
    fetch(`/api/deletesession?userid=${user.userid}`, {method: 'DELETE'})
      .then(res => {
        setUser(null);
        document.getElementsByTagName('body')[0].style.background = 'white';
        navigate('/dashboard');
      })
      .catch(err => console.log('GET to /api/deletesession FAILED ', err));
  };

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
      <Link to='/about' onClick={handleSignOut}>Sign Out</Link>

      <CreateOrder user = {user} orderCount = {orderCount} setOrderCount = {setOrderCount} />
      <OrderList user = {user}  orderCount = {orderCount} />
    </>
  );
  
};
export default Dashboard;
