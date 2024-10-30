import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';
import { useTranslation } from 'react-i18next'; // Import the hook
import AtomsTextCardChatWelcome from '../atoms/atomsChat/atomsChatMain/atomsTextCardChatWelcome';

const items = [
  'Ultrices morbi parturient duis tellus feugiat non amet pretium.',
  '“ Vitae malesuada lectus id feugiat amet elit eget. Blandit ut felis magna. “',
  '“ Aliquam tempor hendrerit cursus integer ac viverra commodo sit. Aliquet nunc scelerisque in elit eget. ”',
  '“ Adipiscing quis venenatis consectetur pellentesque tempus. Sit sapien a mattis et faucibus ante. Tortor cursus urna leo ac. ”',
];

const itemsPrompt = [
  'promptIdeas',
  'promptIdeas',
  'tellJoke',
  'writeEmail',
];

const PromptButton = ({ text }) => (
  <div className='px-2 py-1 text-center bg-[#6161ff1f] border-[0px] rounded-2xl text-[10px] font-medium text-primary'>
    <p>{text}</p>
  </div>
);

function ChatWelcome() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className='flex items-center justify-center'>
      <div className='block text-center  h-full lg:pt-8 pt-8'>
        <h1 className=' font-bold text-3xl'>Board Pins.</h1>
        <h2 className='text-primary font-bold text-3xl py-2'>
          {t('welcome_chat')}
        </h2>
        <p className='text-2xl font-light '>
          {t('personalized')}
        </p>

        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 pt-12 mx-6'>
          {items?.map((item, key) => (
            <AtomsTextCardChatWelcome text={item} key={key} />
          ))}
        </div>

        <section>
          <div className='py-3 px-5 flex gap-2 items-center text-[#979797]'>
            <h1 className='text-start'>{t('hidePrompts')}</h1>
            <MdOutlineKeyboardArrowDown size={18} />
            <RxUpdate size={12} />
          </div>
        </section>

        <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-3 mx-6'>
          {itemsPrompt.map((item, key) => (
            <PromptButton text={t(item)} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatWelcome;
