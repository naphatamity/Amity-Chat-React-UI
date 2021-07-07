import { ChannelRepository } from '@amityco/js-sdk';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/pro-solid-svg-icons';
import customizableComponent from '../../utils/customization';
import useLiveObject from '../../hooks/useLiveObject';
// import { backgroundImage as UserImage } from '../../icons/User';

import {
  Avatar,
  ChatHeaderContainer,
  DetailsIcon,
  Channel,
  ChannelInfo,
  ChannelName,
  MemberCount,
  GroupIcon,
} from './styles';

const channelRepo = new ChannelRepository();

const ChatHeader = ({ channelId, onChatDetailsClick }) => {
  const channel = useLiveObject(() => channelRepo.channelForId(channelId), [channelId]);

  return (
    <ChatHeaderContainer>
      <Channel>
        <Avatar
          size={40}
          /* @ts-ignore */
          avatarCustomUrl={channel.metadata?.avatarCustomUrl}
        />
        <ChannelInfo>
          <ChannelName>
            {/* @ts-ignore */}
            {channel.metadata?.channelType === 'group' && (
              <GroupIcon>
                <FaIcon icon={faUsers} />
              </GroupIcon>
            )}
            {/* @ts-ignore */}
            {channel.displayName || channel.channelId}
          </ChannelName>
          {/* @ts-ignore */}
          {channel.channelId !== 'Emma Davis' && (
            /* @ts-ignore */
            <MemberCount>{channel.memberCount} members</MemberCount>
          )}
        </ChannelInfo>
      </Channel>
      <DetailsIcon onClick={onChatDetailsClick} />
    </ChatHeaderContainer>
  );
};
export default customizableComponent('ChatHeader', ChatHeader);
