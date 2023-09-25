import React from 'react';
import { Outlet } from 'react-router';
import Nav from './Nav';
const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default SharedLayout;
