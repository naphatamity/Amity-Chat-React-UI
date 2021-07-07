import React from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons';
import { faCircle } from '@fortawesome/pro-regular-svg-icons';
import { UserRepository } from '@amityco/js-sdk';
import { UsersListRowStyled, UsersListName, SelectedCircle } from './styles';
import useLiveObject from '../../hooks/useLiveObject';
import Avatar from '../Avatar';

const userRepo = new UserRepository();

function UsersListRow({ userId, isSelected, onClick }) {
  const user = useLiveObject(() => userRepo.userForId(userId), [userId]);

  return (
    <UsersListRowStyled onClick={() => onClick()}>
      {user.userId ? (
        <React.Fragment>
          <Avatar size={40} avatarCustomUrl={user.metadata.avatarCustomUrl} />
          <UsersListName>{user.displayName ? user.displayName : user.userId}</UsersListName>
          <SelectedCircle isSelected={isSelected}>
            <FaIcon icon={isSelected ? faCheckCircle : faCircle} />
          </SelectedCircle>
        </React.Fragment>
      ) : (
        'Loading'
      )}
    </UsersListRowStyled>
  );
}

export default UsersListRow;
