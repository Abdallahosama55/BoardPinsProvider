import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom'; // useLocation to detect page changes
import arrow from '../../../../../assets/icons/arrowwhite.png';
import { useSendMessageMutation, useCreateConversationMutation } from '../../../../../services/ChatServices';
import { useDispatch } from 'react-redux';
import { addMessage, addresponseModel } from '../../../../../redux/features/ChatSlice';
import { FaPauseCircle } from 'react-icons/fa';

function InputMessage() {
  const [content, setContent] = useState('');
  const [sendMessage, { isLoading }] = useSendMessageMutation();
  const [createConversation] = useCreateConversationMutation();
  const { id } = useParams(); // Conversation ID from URL params
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Detect navigation changes

  // Local state to track the conversationId (param or newly created one)
  const [conversationId, setConversationId] = useState(id);

  // Clear conversationId if navigating away from /chat
  useEffect(() => {
    if (!location.pathname.startsWith('/chat')) {
      setConversationId(null); // Clear conversationId when navigating away from chat page
    }
  }, [location.pathname]);

  // Set conversationId from the URL param or reset it when the URL changes
  useEffect(() => {
    setConversationId(id); // Always reset conversationId when URL param changes
  }, [id]);

  // Handle conversation creation and sending the message
  const handleSendMessage = async () => {
    if (!content.trim()) return;

    try {
      let currentConversationId = conversationId;

      // If conversationId is undefined, create a new conversation
      if (!currentConversationId) {
        const newConversation = await createConversation("untitled").unwrap();
        currentConversationId = newConversation.id; // Assuming the response contains the new conversation ID

        // Update the conversation ID in local state
        setConversationId(currentConversationId);

        // Navigate to the newly created conversation's chat page
        navigate(`/chat/${currentConversationId}`);
      }

      // Dispatch the message to the Redux store
      dispatch(addMessage(content));

      // Send the message
      const message = await sendMessage({ conversationId: currentConversationId, content }).unwrap();
      console.log('Message sent:', message.response);

      // Dispatch the response to Redux
      dispatch(addresponseModel(message.response));

      // Clear the input field
      setContent('');
    } catch (err) {
      console.error('Failed to send message:', err);
    }
  };

  return (
    <div className='w-full shadow-custom2 border-[1px] border-gray-200 rounded-xl h-[50px] flex items-center p-4'>
      <input
        type='text'
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='flex-grow outline-0 px-3 h-100 w-full bg-transparent'
        placeholder='Write a message'
        disabled={isLoading} // Disable input when loading
      />
      <div 
        onClick={handleSendMessage} 
        className={`w-[35px] p-2 rounded-full flex items-center justify-center cursor-pointer ${isLoading ? 'bg-red-500' : 'bg-blue-500'}`}
        style={{ pointerEvents: isLoading ? 'none' : 'auto' }} // Disable button click when loading
      >
        {isLoading ? <FaPauseCircle color='#ffff' /> : <img src={arrow} alt='send message' />}
      </div>
    </div>
  );
}

export default InputMessage;
