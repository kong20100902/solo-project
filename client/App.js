import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Register from './components/Register';

import Error from './components/Error';
import Dashboard from './components/Dashboard';
import './stylesheets/styles.css';


const App = () => {
  const [user, setUser] = useState(null);

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path = '/' element= {<SharedLayout />}>
          <Route index element = {<Home />}></Route>
          <Route path = 'about'  element = {<About />} />
          <Route path = 'contact' element = {<Contact />} />
          <Route path = 'signin' element = {<Signin setUser = {setUser}/>} />
          <Route path = 'register' element = {<Register setUser = {setUser} />} />
          <Route path = '*' element = {<Error />} />

          <Route path = 'dashboard' element= {<Dashboard user = {user} setUser = {setUser} />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
