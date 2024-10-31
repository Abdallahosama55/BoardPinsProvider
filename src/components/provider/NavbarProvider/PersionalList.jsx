import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function PersionalList({ Navgate }) {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation hook

  const logout = () => {
    // Remove the accessToken from localStorage or sessionStorage
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('uuid'); 
    localStorage.removeItem('refreshToken'); 

    // Navigate to the home route
    navigate('/home');
  };

  return (
    <div>
      <ul className="font-medium  text-dark text-sm p-3 flex flex-col gap-1">
        <li onClick={() => Navgate('/setting-profile')} className="cursor-pointer">
          {t('profile')} {/* Use translation key */}
        </li>
        <li onClick={() => Navgate('/myboard')} className="cursor-pointer">
          {t('my_board')} {/* Use translation key */}
        </li>
        <li onClick={() => Navgate('/projectmangement-tasks')} className="cursor-pointer">
          {t('my_tasks')} {/* Use translation key */}
        </li>
        <hr className="mt-2" />
        <li className="text-gray-400 cursor-pointer" onClick={logout}>
          {t('logout')} {/* Use translation key */}
        </li>
      </ul>
    </div>
  );
}

export default PersionalList;
