import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Signin';
import BusinessIntro from './components/BusinessIntro';
import BusinessIntroBanners from './components/BusinessIntroBanners';
import './stylesheets/styles.css';

const App = props => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
