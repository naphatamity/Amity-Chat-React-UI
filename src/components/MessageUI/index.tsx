import React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faHeart, faThumbsUp } from '@fortawesome/pro-solid-svg-icons';
import { FormattedTime } from 'react-intl';
import { ReactorRepository } from '@amityco/js-sdk';
import MessageReactionBubble from '../MessageReactionBubble';
import customizableComponent from '../../utils/customization';
import ConditionalRender from '../ConditionalRender';

// import { backgroundImage as UserImage } from '../../icons/User';

import Linkify from '../Linkify';

import Options from './Options';

import {
  Avatar,
  AvatarWrapper,
  MessageWrapper,
  MessageContainer,
  MessageBody,
  UserName,
  BottomLine,
  MessageDate,
  SystemMessageContainer,
  ReactionContainer,
  Reaction,
  ReactButton,
  MessageMeta,
  MessageImage,
} from './styles';

const DeletedMessage = () => <SystemMessageContainer>deleted</SystemMessageContainer>;

const MessageContent = ({ message: { data, type, isDeleted } }) => {
  if (isDeleted) return <DeletedMessage />;

  if (data.text.startsWith('img:http')) {
    return <MessageImage src={data.text.substring(4)} alt="" />;
  }

  switch (type) {
    case 'text':
      return <Linkify>{data.text}</Linkify>;
    case 'custom':
      return JSON.stringify(data);

    case 'image':
    case 'file':
    default:
      return <SystemMessageContainer>Unsupported message format</SystemMessageContainer>;
  }
};

const Message = ({
  message,
  message: { createdAt, user, messageId },
  consequent,
  incoming,
  showReactions,
  setShowReactions,
}) => {
  const { displayName, metadata } = user.model;
  const reactorRepo = new ReactorRepository(message);

  const containsReaction = reaction => {
    /* @ts-ignore */
    return Object.keys(message.reactions).indexOf(reaction) > -1;
  };

  const handleReaction = reaction => {
    if (
      /* @ts-ignore */
      message.myReactions &&
      /* @ts-ignore */
      message.myReactions.length > 0 &&
      /* @ts-ignore */
      message.myReactions.indexOf(reaction) >= 0
    ) {
      /* @ts-ignore */
      reactorRepo.removeReaction(reaction);
    } else {
      reactorRepo.addReaction(reaction);
    }
    setShowReactions(false);
  };

  const handleToggleReactionBubble = () => {
    setShowReactions(message.messageId);
  };

  return (
    <MessageWrapper incoming={incoming}>
      <ConditionalRender condition={incoming}>
        <AvatarWrapper>
          <ConditionalRender condition={!consequent}>
            <Avatar avatarCustomUrl={metadata?.avatarCustomUrl} />
          </ConditionalRender>
        </AvatarWrapper>
      </ConditionalRender>
      <MessageContainer>
        <ConditionalRender condition={incoming && !consequent}>
          <UserName>{displayName}</UserName>
        </ConditionalRender>
        <MessageBody incoming={incoming}>
          {/* @ts-ignore */}
          <MessageContent message={message} />
          <BottomLine>
            {/* @ts-ignore */
            !message.isDeleted && (
              <MessageDate>
                <FormattedTime value={createdAt} />
              </MessageDate>
            )}
            {/* @ts-ignore */}
            <ConditionalRender condition={!message.isDeleted}>
              <Options incoming={incoming} message={message} />
            </ConditionalRender>
          </BottomLine>
          {/* @ts-ignore */
          !!message.reactionsCount && (
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
              {/* @ts-ignore */}
              <span>{message.reactionsCount}</span>
            </ReactionContainer>
          )}
        </MessageBody>

        <MessageMeta>
          {/* @ts-ignore */
          !message.isDeleted && (
            <ReactButton onClick={() => handleToggleReactionBubble()}>React</ReactButton>
          )}
          {/* @ts-ignore */
          !message.isDeleted && showReactions && showReactions === messageId && (
            <MessageReactionBubble
              handleReaction={handleReaction}
              messageId={messageId}
              setShowReactions={setShowReactions}
              showReactions={showReactions}
            />
          )}
        </MessageMeta>
      </MessageContainer>
    </MessageWrapper>
  );
};

export default customizableComponent('Message', Message);
