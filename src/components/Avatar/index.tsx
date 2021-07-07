import React from 'react';
import { AvatarStyled } from './styles';
import UserImage from '../../icons/User';

type Props = {
  avatarCustomUrl: string;
  size?: number;
  style?: React.CSSProperties;
};

export default function Avatar({ avatarCustomUrl, size, style }: Props) {
  return (
    <div style={style}>
      <AvatarStyled size={size} avatarCustomUrl={avatarCustomUrl}>
        {!avatarCustomUrl && <UserImage height={40} width={40} />}
      </AvatarStyled>
    </div>
  );
}
