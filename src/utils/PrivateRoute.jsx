import React, { useEffect, useState } from 'react'; 
import { Navigate, Outlet, useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode'; 

const PrivateRoute = ({ redirectTo }) => { 
  const accessToken = localStorage.getItem('accessToken'); 
  const refreshToken = localStorage.getItem('refreshToken'); 
  const [loading, setLoading] = useState(true); 
  const [shouldRedirect, setShouldRedirect] = useState(false); 
  const nav = useNavigate(); 

  // Helper function to check if token is expired 
  const isTokenExpired = (token) => { 
    if (!token) return true; 
    try { 
      const decodedToken = jwtDecode(token); 
      const currentTime = Date.now() / 1000; // Current time in seconds 
      return decodedToken.exp < currentTime; 
    } catch (error) { 
      // If decoding fails, consider the token expired 
      return true; 
    } 
  }; 

  useEffect(() => { 
    // Check if accessToken is expired 
    if (!accessToken || isTokenExpired(accessToken)) { 
      // If accessToken is expired, check for refreshToken 
      if (!refreshToken || isTokenExpired(refreshToken)) { 
        // If both tokens are missing or expired, redirect to login 
        nav("/login"); 
        setShouldRedirect(true); 
        setLoading(false); 
        return; 
      } else {
        // If refreshToken is valid, simply log out the user since we don't have a refresh endpoint
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        nav("/login");
        setShouldRedirect(true);
        setLoading(false);
        return;
      }
    } 

    // If accessToken is valid, just set loading to false 
    setLoading(false); 
  }, [accessToken, refreshToken, nav]); 

  // Handle the redirection 
  if (shouldRedirect) { 
    return <Navigate to={redirectTo} />; 
  } 

  // Show loading indicator while processing tokens 
  if (loading) { 
    return <div>Loading...</div>; 
  } 

  // If accessToken is valid, render the child routes 
  return <Outlet />; 
}; 

export default PrivateRoute;
