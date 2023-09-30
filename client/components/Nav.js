import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav>
        <NavLink to='/' className='navbtn' >Home</NavLink>
        <NavLink to='/about' className='navbtn' >About</NavLink>
        <NavLink to='/contact' className='navbtn' >Contact</NavLink>
      </nav>
      <nav>
        <NavLink to='/signin' className='navbtn' >Sign In</NavLink>
        <NavLink to='/register' className='navbtn' >Register</NavLink>
        <NavLink to='/dashboard' className='navbtn' >Dashboard</NavLink>
      </nav>
    </>
  );
};
export default Nav;
