// components/NavigationItem.jsx
import React from 'react';

const NavigationItem = ({ label, icon, isSelected, onClick }) => (
  <li
    className={`cursor-pointer flex gap-2 ${isSelected ? 'text-blue-500 border-b-[3px] border-blue-500' : ''}`}
    onClick={onClick}
  >
    <img src={icon} alt={label} className={`w-[18px] ${isSelected ? 'filter-blue-500' : ''}`} />
    {label}
  </li>
);

export default NavigationItem;
