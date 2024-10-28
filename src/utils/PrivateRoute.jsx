import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
const PrivateRoute = ({ redirectTo }) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
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
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setShouldRedirect(true);
      return setLoading(false); // Return early to avoid further execution
    }

    // If accessToken is valid, set loading to false
    setLoading(false);
  }, [accessToken, nav]);

  // Handle the redirection
  if (shouldRedirect) {
    return <Navigate to={redirectTo} />;
  }

  // Show loading indicator while processing tokens
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // If accessToken is valid, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
