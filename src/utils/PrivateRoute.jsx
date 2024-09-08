import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ redirectTo }) => {
  const accessToken = localStorage.getItem('accessToken');

  // If there's no accessToken, redirect to the specified path
  if (!accessToken) {
    return <Navigate to={redirectTo} />;
  }

  // Otherwise, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
