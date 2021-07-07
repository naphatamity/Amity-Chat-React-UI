import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { MessageRepository } from '@amityco/js-sdk';

import OutgoingMessage from '../MessageUI/OutgoingMessage';
import IncomingMessage from '../MessageUI/IncomingMessage';
import customizableComponent from '../../utils/customization';
import { withSDK } from '../Config/context';
import useLiveCollection from '../../hooks/useLiveCollection';

import { InfiniteScrollContainer, MessageListContainer } from './styles';

const messageRepo = new MessageRepository();

const MessageList = ({ client, channelId }) => {
  const [showReactions, setShowReactions] = useState(null);
  const [messages, hasMore, loadMore] = useLiveCollection(
    () => messageRepo.messagesForChannel({ channelId }),
    [channelId, setShowReactions],
  );

  const { currentUserId } = client;

  return (
    <InfiniteScrollContainer>
      <InfiniteScroll
        hasMore={hasMore}
        loadMore={loadMore}
        useWindow={false}
        loader={<span key={0}>Loading</span>}
        isReverse
      >
        <MessageListContainer>
          {/* @ts-ignore */
          messages.map((message, i) => {
            const nextMessage = messages[i + 1];
            const consequent = nextMessage && nextMessage.userId === message.userId;
            const outgoing = message.userId === currentUserId;
            const MessageComponent = outgoing ? OutgoingMessage : IncomingMessage;
            return (
              <MessageComponent
                key={message.messageId}
                message={message}
                consequent={consequent}
                setShowReactions={setShowReactions}
                showReactions={showReactions}
              />
            );
          })}
        </MessageListContainer>
      </InfiniteScroll>
    </InfiniteScrollContainer>
  );
};

export default withSDK(customizableComponent('MessageList', MessageList));
