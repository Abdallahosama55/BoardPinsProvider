import React from 'react';
import { useParams } from 'react-router-dom';
import modelImage from '../../../assets/images/chat/model.png';
import userImage from '../../../assets/images/chat/user.png';
import { SlDislike, SlLike } from 'react-icons/sl';
import { TfiReload } from 'react-icons/tfi';
import { MdContentCopy } from 'react-icons/md';
import { useGetMessagesQuery } from '../../../services/ChatServices';
import MarkdownIt from 'markdown-it'; // Import markdown-it
import { useSelector } from 'react-redux';

// Initialize markdown-it
const md = new MarkdownIt();

const IconButton = ({ icon: Icon }) => (
  <button className="text-gray-500 hover:text-blue-500 transition">
    <Icon />
  </button>
);

const Message = ({ isUser, text, imgSrc }) => (
  <div className={`message ${isUser ? 'messageuser' : 'messagemodal'} flex items-start gap-2`}>
    {isUser && <img src={imgSrc} className="rounded-lg w-[35px]" alt="User" />}
    <div className="shadow-custom bg-white text-[#26222B] max-w-[400px] lg:max-w-[700px] overflow-auto border-[1px] p-4 w-full rounded-xl border-gray-100">
      {isUser ? (
        text
      ) : (
        <div dangerouslySetInnerHTML={{ __html: md.render(text) }} />
      )}
      {!isUser && (
        <div className="pt-5 flex justify-end items-center duration-200 gap-2">
          <IconButton icon={SlLike} />
          <IconButton icon={SlDislike} />
          <IconButton icon={TfiReload} />
          <IconButton icon={MdContentCopy} />
        </div>
      )}
    </div>
    {!isUser && <img src={imgSrc} className="rounded-lg w-[35px]" alt="Model" />}
  </div>
);

const ChatMessages = () => {
  const { id } = useParams();
  const messageslist = useSelector((state) => state.message.messages);
  const Modellist = useSelector((state) => state.message.responseModel);

  const { data: response, isLoading, isError } = useGetMessagesQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading messages.</div>;

  const messages = Array.isArray(response?.results) ? response.results : [];

  // Rearranged array for interleaved messages in reverse order
  const interleavedMessages = [];

  for (let i = messages.length - 1; i >= 0; i--) {
    interleavedMessages.push(messages[i]);
    if (i - 1 >= 0) {
      interleavedMessages.push(messages[i - 1]);
    }
    i--;
  }

  // Map interleaved messages to the desired format
  const formattedMessages = interleavedMessages.map(message => ({
    isUser: message.is_from_user,
    text: message.content,
    imgSrc: message.is_from_user ? userImage : modelImage,
    id: message.id
  }));

  // Interleave messageslist and Modellist
  const maxLength = Math.max(messageslist.length, Modellist.length);
  const interleavedUserModelMessages = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < messageslist.length) {
      interleavedUserModelMessages.push({
        isUser: true,
        text: messageslist[i],
        imgSrc: userImage,
        id: Math.random().toString(36).substr(2, 9)
      });
    }
    if (i < Modellist.length) {
      interleavedUserModelMessages.push({
        isUser: false,
        text: Modellist[i],
        imgSrc: modelImage,
        id: Math.random().toString(36).substr(2, 9)
      });
    }
  }

  // Combine formatted messages and interleaved user/model messages
  const combinedMessages = [
    ...formattedMessages,
    ...interleavedUserModelMessages
  ];

  return (
    <div className="flex flex-col gap-8 p-4 pb-32 h-full  overflow-y-auto" style={{ scrollbarWidth: 'thin', scrollbarColor: '#4B5563 #1E1E1E' }}>
      {combinedMessages?.length === 0 ? (
        <div>No messages found.</div>
      ) : (
        combinedMessages?.map(({ id, isUser, text, imgSrc }) => (
          <Message
            key={id}
            isUser={isUser}
            text={text}
            imgSrc={imgSrc}
          />
        ))
      )}
    </div>
  );
};

export default ChatMessages;
