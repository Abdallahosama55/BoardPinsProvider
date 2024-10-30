import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import InputSearch from '../atoms/atomsChat/atomsChatSidebar/InputSearch';
import ButtonaddChat from '../atoms/atomsChat/atomsChatSidebar/ButtonaddChat';
import { useCreateConversationMutation } from '../../../services/ChatServices';
import { useTranslation } from 'react-i18next'; // Import useTranslation

function Chatsidebar() {
  const { t } = useTranslation(); // Initialize translation function
  const [createConversation] = useCreateConversationMutation();
  const [conversationTitle, setConversationTitle] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddChat = async () => {
    try {
      const newConversation = await createConversation(conversationTitle).unwrap();
      console.log('New conversation created:', newConversation);

      // Navigate to the chat message page with the dynamic conversation id
      navigate(`/chat/${newConversation.id}`);

      // Optionally reset the input
      setConversationTitle('');
    } catch (err) {
      console.error('Failed to create conversation:', err);
    }
  };

  return (
    <div className='h-full flex flex-col gap-3'>
      <InputSearch  title={t('search_chat')} />
      <hr className='font-extrabold' />
      <ButtonaddChat onClick={handleAddChat} text={t('add_chat')} /> {/* Use translation here */}
    </div>
  );
}

export default Chatsidebar;
