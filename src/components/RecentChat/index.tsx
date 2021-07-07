import { useState, useEffect, memo } from 'react';
import {
  UserRepository,
  ChannelRepository,
  // ChannelMembershipRepository,
  ChannelType,
} from '@amityco/js-sdk';
import ChatItem from '../ChatItem';
import customizableComponent from '../../utils/customization';
import CreateNewChat from './CreateNewChat';
import useChannelsList from '../../hooks/useChannelsList';
import { useConfig } from '../Config';
// import useLiveObject from '../../hooks/useLiveObject';
import { sortByChannelId } from '../../utils/sorting';

import { RecentChatListContainer, RecentChatListHeader } from './styles';

const userRepo = new UserRepository();
const channelRepo = new ChannelRepository();
const RecentChat = ({ onChannelClick, selectedChannelId, setCurrenChannelId }) => {
  const { dm, setDm } = useConfig();
  const channels = useChannelsList('member');
  const [sortedChannels, setSortedChannels] = useState([]);
  // const user = useLiveObject(() => dm && userRepo.userForId(dm), [dm]);

  useEffect(() => {
    if (!dm) return;
    const liveObject = userRepo.userForId(dm);
    // liveObject.model && setUser(liveObject.model);
    liveObject.on('dataUpdated', async e => {
      setDm(undefined);
      const createChat = channelRepo.createChannel({
        channelId: e.displayName,
        type: ChannelType.Standard,
        userIds: [e.userId],
      });
      createChat.once('dataUpdated', () => {
        channelRepo.setMetadata({
          channelId: e.displayName,
          metadata: { avatarCustomUrl: e.metadata?.avatarCustomUrl },
        });
        setCurrenChannelId(e.displayName);
      });
    });

    return () => liveObject.dispose();
  }, [dm]);

  useEffect(() => {
    if (channels && Array.isArray(channels)) {
      const sorted = channels ? channels.sort(sortByChannelId) : [];
      /* @ts-ignore */
      setSortedChannels(sorted);
      /* @ts-ignore */
      if (!selectedChannelId && sorted[0] && sorted[0].channelId)
        /* @ts-ignore */
        setCurrenChannelId('Emma Davis');
    }
  }, [selectedChannelId, channels]);

  return (
    <RecentChatListContainer>
      <RecentChatListHeader>
        Chats
        <CreateNewChat />
      </RecentChatListHeader>
      {sortedChannels.map(channel => (
        <ChatItem
          /* @ts-ignore */
          selected={selectedChannelId === channel.channelId}
          onSelect={onChannelClick}
          /* @ts-ignore */
          key={channel.channelId}
          channel={channel}
        />
      ))}
    </RecentChatListContainer>
  );
};

export default memo(customizableComponent('RecentChat', RecentChat));
