import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BusinessIntro from './components/BusinessIntro';
import BusinessIntroBanners from './components/BusinessIntroBanners';
import './stylesheets/styles.css';


const App = props => {
  const navigate = useNavigate();

  const handleSignin = () => {
    console.log('hi')
    navigate('/signin');


  };


  return (

    <section>
      <div>
        <BusinessIntroBanners />
      </div>
      <Link to="/signin">Sign In</Link>
      <button onClick={()=>window.open('/signin', 'rel=noopener noreferrer')}>Register</button>

    </section>
  );
};

export default App;
