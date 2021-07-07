import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faHeart, faThumbsUp } from '@fortawesome/pro-solid-svg-icons';
import { ReactorRepository, MessageRepository } from '@amityco/js-sdk';
import MessageReactionBubble from '../MessageReactionBubble';
import FadeIn from '../FadeIn';
import Avatar from '../Avatar';
import { getTimestampCalendarFormat } from '../../utils/datetime';
import DateFormat from '../../utils/dateFormat';
import useLiveObject from '../../hooks/useLiveObject';

import {
  MessageWrapper,
  MessageBubble,
  MainMessage,
  ReactButton,
  MessageTime,
  MessageMeta,
  Reaction,
  ReactionContainer,
  DateSeparator,
} from './styles';

function getDateSeparator(prevMessage, message) {
  let separatorNode = null;
  const currentDate = DateFormat.getInstance(message.createdAt);

  const firstMessage = message.channelSegment === 1;
  const pastDiffDays =
    prevMessage && currentDate.isAfter(DateFormat.getInstance(prevMessage.createdAt), 'days');
  if (firstMessage) {
    separatorNode = <DateSeparator>Yesterday</DateSeparator>;
  } else if (pastDiffDays) {
    const dayText = getTimestampCalendarFormat(currentDate);
    separatorNode = <DateSeparator>{dayText}</DateSeparator>;
  }

  return separatorNode;
}
const messageRepo = new MessageRepository();

function Message({
  setShowReactions,
  showReactions,
  outgoing,
  consequent,
  messageId,
  nextMessage,
}) {
  const msg = useLiveObject(() => messageRepo.messageForId(messageId), [messageId]);
  if (Object.keys(msg).length < 1) return null;
  const author = msg.user.model;

  const reactorRepo = new ReactorRepository(msg);

  const handleReaction = reaction => {
    if (msg.myReactions && msg.myReactions.length > 0) {
      const oldReaction = msg.myReactions[0];
      reactorRepo.removeReaction(oldReaction).then(() => {
        if (oldReaction !== reaction) {
          reactorRepo.addReaction(reaction);
        }
      });
    } else {
      reactorRepo.addReaction(reaction);
    }
    setShowReactions(false);
  };

  const handleToggleReactionBubble = () => {
    setShowReactions(msg.messageId);
  };

  const containsReaction = reaction => {
    return Object.keys(msg.reactions).indexOf(reaction) > -1;
  };

  return (
    <FadeIn>
      {getDateSeparator(nextMessage, msg)}
      {!msg.isDeleted && (
        <MessageWrapper isOwn={outgoing}>
          {!outgoing && (
            <div style={{ minWidth: 32 }}>
              {!consequent && <Avatar avatarCustomUrl={author.metadata.avatarCustomUrl} />}
            </div>
          )}
          <MainMessage>
            {!(consequent || outgoing) && (
              <strong>{author.displayName ? author.displayName : msg.userId}</strong>
            )}
            <MessageBubble isOwn={outgoing}>
              {msg?.data?.text}
              {!!msg.reactionsCount && (
                <ReactionContainer>
                  {containsReaction('like') && (
                    <Reaction>
                      <FaIcon icon={faThumbsUp} />
                    </Reaction>
                  )}
                  {containsReaction('love') && (
                    <Reaction>
                      <FaIcon icon={faHeart} />
                    </Reaction>
                  )}
                  {containsReaction('care') && (
                    <Reaction>
                      <FaIcon icon={faHandHoldingHeart} />
                    </Reaction>
                  )}
                  <span>{msg.reactionsCount}</span>
                </ReactionContainer>
              )}
            </MessageBubble>
            <MessageMeta>
              {<ReactButton onClick={() => handleToggleReactionBubble()}>React</ReactButton>}
              {showReactions && showReactions === messageId && (
                <MessageReactionBubble
                  handleReaction={handleReaction}
                  messageId={messageId}
                  setShowReactions={setShowReactions}
                  showReactions={showReactions}
                />
              )}
              <MessageTime>
                {new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </MessageTime>
            </MessageMeta>
          </MainMessage>
        </MessageWrapper>
      )}
    </FadeIn>
  );
}

export default Message;
