import React, { useState } from 'react';

import del from '../../../assets/icons/delete.svg';
import right from '../../../assets/icons/right.svg';
import rec from '../../../assets/icons/rec.png';
import { useTranslation } from 'react-i18next';

const NotificationList = () => {
  const { t } = useTranslation(); // Use the 'common' namespace
  const [selected, setSelected] = useState('All');

  const tabs = [t('tabs.all'), t('tabs.unread'), t('tabs.mentioned')]; // Use translations for tabs
  const notifications = [
    { id: 1, text: t('notification.notification_1'), description: t('notification.description') },
    { id: 2, text: t('notification.notification_2'), description: t('notification.description') },
    { id: 3, text: t('notification.notification_3'), description: t('notification.description') }
  ];

  const renderTabs = () => {
    return tabs?.map((tab) => (
      <span
        key={tab}
        className={`cursor-pointer ${selected === tab ? 'border-blue-500 border-b-[3px]' : ''}`}
        onClick={() => setSelected(tab)}
      >
        {tab}
      </span>
    ));
  };

  const renderButton = (imgSrc, text) => {
    return (
      <button className='bg-[#1E1E1E14] py-1 px-2 rounded font-light text-xs text-dark flex items-center gap-1'>
        <img src={imgSrc} className="w-20px" alt={text} />
        {text}
      </button>
    );
  };

  const renderNotifications = () => {
    return notifications?.map((notification) => (
      <div key={notification.id} className=' hover:bg-gray-100  cursor-pointer p-3 rounded-lg'>
        <div className='flex gap-2 text-start'>
          <input type='checkbox' />
          <h3 className='  font-bold text-dark'>{notification.text}</h3>
        </div>
        <p className='ps-4 text-gray-500 text-sm'>
          {notification.description}
        </p>
      </div>
    ));
  };

  return (
    <div className='p-4 relative max-w-[450px] text-start'>
      <img src={rec} className='absolute top-[-10px] end-1 w-[30px]' alt="Decoration" />
      <h1 className='font-semibold py-4 text-dark text-start  '>{t('notifications')}</h1>
      <div className='border-b-[1px] border-[#1E1E1E80]  pb-5 flex gap-3   font-medium text-[16px]'>
        {renderTabs()}
      </div>
      <div className='flex gap-3 py-4'>
        {renderButton(del, t('delete_all'))} {/* Use translation for delete button */}
        {renderButton(right, t('mark_all_read'))} {/* Use translation for mark as read button */}
      </div>
      <div className='max-h-64 flex flex-col gap-2 bg overflow-y-auto' style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 ##1E1E1EBF' }}>
        {renderNotifications()}
      </div>
    </div>
  );
};

export default NotificationList;
