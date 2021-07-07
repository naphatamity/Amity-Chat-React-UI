import { useState, memo } from 'react';

import RecentChat from '../RecentChat';
import ConditionalRender from '../ConditionalRender';
import customizableComponent from '../../utils/customization';
import Chat from '../Chat';
import ChatDetails from '../ChatDetails';
import Message from '../../icons/Message';
import { ChatHomeContainer } from './styles';

// TODO add onCreateGroupChat
const ChatHome = memo(() => {
  const [currentChannelId, setCurrenChannelId] = useState(null);

  const [showChatDetails, setShowChatDetails] = useState(false);

  const toggleShowChatDetails = () => setShowChatDetails(!showChatDetails);
  const hideChatDetails = () => setShowChatDetails(false);

  return (
    <ChatHomeContainer>
      <RecentChat
        onChannelClick={setCurrenChannelId}
        selectedChannelId={currentChannelId}
        setCurrenChannelId={setCurrenChannelId}
      />
      <ConditionalRender condition={currentChannelId}>
        <Chat
          key={currentChannelId}
          channelId={currentChannelId}
          onChatDetailsClick={toggleShowChatDetails}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E5E5E5',
            color: '#dfdfdf',
            fontSize: '20vw',
          }}
        >
          <Message />
        </div>
      </ConditionalRender>
      <ConditionalRender condition={showChatDetails && currentChannelId}>
        <ChatDetails
          key={currentChannelId}
          channelId={currentChannelId}
          onClose={hideChatDetails}
          setCurrenChannelId={setCurrenChannelId}
        />
      </ConditionalRender>
    </ChatHomeContainer>
  );
});

export default customizableComponent('ChatHome', ChatHome);
