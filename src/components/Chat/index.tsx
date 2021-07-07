import { useEffect } from 'react';
import { MessageRepository, ChannelRepository, ChannelType } from '@amityco/js-sdk';

import MessageList from '../MessageList';
import MessageComposeBar from '../MessageComposeBar';
import customizableComponent from '../../utils/customization';

import ChatHeader from '../ChatHeader';

import { ChannelContainer } from './styles';

const channelRepo = new ChannelRepository();
const messageRepo = new MessageRepository();

const Chat = ({ channelId, onChatDetailsClick }) => {
  useEffect(() => {
    channelRepo.joinChannel({
      channelId,
      type: ChannelType.Standard,
    });
  }, []);

  const sendMessage = text => {
    messageRepo.createTextMessage({
      channelId,
      text,
    });
  };

  return (
    <ChannelContainer>
      <ChatHeader channelId={channelId} onChatDetailsClick={onChatDetailsClick} />
      <MessageList channelId={channelId} />
      <MessageComposeBar onSubmit={sendMessage} />
    </ChannelContainer>
  );
};

export default customizableComponent('Chat', Chat);
