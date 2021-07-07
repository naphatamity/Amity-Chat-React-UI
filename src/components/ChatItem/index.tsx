import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/pro-solid-svg-icons';
import customizableComponent from '../../utils/customization';

import { Avatar, ChatItemContainer, /* UnreadCount */ UnreadCounter, GroupIcon } from './styles';

const ChatItem = ({ channel, selected, onSelect }) => (
  <ChatItemContainer onClick={() => onSelect(channel.channelId)} active={selected}>
    <Avatar
      size={40}
      avatarCustomUrl={channel.metadata?.avatarCustomUrl}
      style={{ marginRight: 8 }}
    />
    {channel.metadata.channelType === 'group' && (
      <GroupIcon>
        <FaIcon icon={faUsers} />
      </GroupIcon>
    )}
    {channel.channelId}
    {!!channel.unreadCount && <UnreadCounter>{channel.unreadCount}</UnreadCounter>}
  </ChatItemContainer>
);

export default customizableComponent('ChatItem', ChatItem);
