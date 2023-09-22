import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import BusinessIntro from './components/BusinessIntro';
import BusinessIntroBanners from './components/BusinessIntroBanners';
import './stylesheets/styles.css';

const App = props => {
  return (
    <section>
      <div>
        <BusinessIntroBanners />
      </div>
      <button>Sign In</button>
      <button>Register</button>
    </section>
  );
};

export default App;
