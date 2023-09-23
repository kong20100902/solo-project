import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './stylesheets/styles.css';


const App = props => {
  
  return (
    <>
      <a href='/signin'>Sign in</a>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
