import React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-regular-svg-icons';
import { UserRepository } from '@amityco/js-sdk';
import Avatar from '../Avatar';
import useLiveObject from '../../hooks/useLiveObject';
import { SelectedUserItemStyled, UnselectButton, SelectedUserName, AvatarWrapper } from './styles';

const userRepo = new UserRepository();

function SelectedUserItem({ userId, onUnselect }) {
  const user = useLiveObject(() => userRepo.userForId(userId), [userId]);

  return (
    <SelectedUserItemStyled>
      {user && user.userId ? (
        <React.Fragment>
          <AvatarWrapper>
            <Avatar size={46} avatarCustomUrl={user.metadata.avatarCustomUrl} />
            <UnselectButton onClick={() => onUnselect(userId)}>
              <FaIcon icon={faTimes} />
            </UnselectButton>
          </AvatarWrapper>
          <SelectedUserName>{user.displayName ? user.displayName : user.userId}</SelectedUserName>
        </React.Fragment>
      ) : (
        '...'
      )}
    </SelectedUserItemStyled>
  );
}

export default SelectedUserItem;
