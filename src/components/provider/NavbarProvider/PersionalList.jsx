import React from 'react'
import { useNavigate } from 'react-router-dom';

function PersionalList({Navgate}) {
const navigate= useNavigate()
  const logout = () => {
    // Remove the accessToken from localStorage or sessionStorage
    localStorage.removeItem('accessToken'); // or sessionStorage.removeItem('accessToken');
    localStorage.removeItem('uuid'); // or sessionStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken'); // or sessionStorage.removeItem('accessToken');
  
    // Navigate to the home route
    navigate('/home');
  };
  return (
    <div>            <ul className="font-medium text-dark text-sm p-3 flex flex-col gap-1">
    <li onClick={()=>Navgate('/setting-profile')} className=" cursor-pointer">Profile</li>
    <li onClick={()=>Navgate('/myboard')} className=" cursor-pointer">My board</li>
    <li onClick={()=>Navgate('/projectmangement-tasks')} className=" cursor-pointer">My Tasks</li>
    <hr className="mt-2" />
    <li className="text-gray-400 cursor-pointer"  onClick={logout} >Logout</li>
  </ul></div>
  )
}

export default PersionalList