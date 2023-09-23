import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}>
          <Route path='signin' element={<Signin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
