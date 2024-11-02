import React from 'react';
import { useTranslation } from 'react-i18next';
import pin from '../../../assets/icons/pin-1 1.png';
import icon_edit from '../../../assets/icons/pepicons-pop_expand.png';
import icon_setting from '../../../assets/icons/Group (1).png';
import add from '../../../assets/icons/Group 1000001543.png';
import chat from '../../../assets/icons/Frame 1171275911.png';
import search from '../../../assets/icons/Frame 26872.png';
import Remove from '../../../assets/icons/block_group.png';
import accept from '../../../assets/icons/block1.png';

const buttons = [
  { src: icon_edit, alt: 'Edit', className: 'w-[25px]' },
  { src: icon_setting, alt: 'Settings', className: 'w-[25px]' },
];

const itemsRecent = [
  { src: add, textKey: 'recents.add_new_section' },
  { src: chat, textKey: 'recents.chat' },
  { src: search, textKey: 'recents.search' },
  { src: Remove, textKey: 'recents.remove_merchant' },
  { src: Remove, textKey: 'recents.remove_merchant' },
  { src: accept, textKey: 'recents.accept_request' },
  { src: Remove, textKey: 'recents.remove_merchant' },
  { src: accept, textKey: 'recents.accept_request' },
  { src: accept, textKey: 'recents.accept_request' },
];

function Recents() {
  const { t } = useTranslation();

  return (
    <div className='shadow-custom rounded-xl p-5 py-1'>
      <div className='my-5 flex items-start'>
        <img src={pin} className='bg-[#D9D9D9] p-2 rounded-[10%] m-2' alt='Pin' />
        <div>
          <h5>{t('recents.title')}</h5>
          <p>{t('recents.description')}</p>
        </div>
        <div className='absolute md:start-[85%] gap-2 start-[80%] flex items-center justify-center'>
          {buttons.map((button, index) => (
            <button key={index}>
              <img src={button.src} alt={button.alt} className={button.className} />
            </button>
          ))}
        </div>
      </div>
      <div className='mx-2 my-6 w-full'>
        {itemsRecent.map((item, index) => (
          <div className='mx-2 my-6 flex w-full gap-5 items-center' key={index}>
            <img src={item.src} className='w-[20px]' alt={t(item.textKey)} />
            <span className='flex-grow'>{t(item.textKey)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recents;
