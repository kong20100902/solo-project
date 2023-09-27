import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
      <nav>
        <NavLink to='/signin'>Sign In</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/dashboard'>dashboard</NavLink>
      </nav>
    </>
  );
};
export default Nav;
