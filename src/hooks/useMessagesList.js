import { useState, useEffect } from 'react';
import { MessageRepository, ChannelMembership } from '@amityco/js-sdk';
import unionBy from 'lodash/unionBy';

import useLiveCollection from './useLiveCollection';

function useMessagesList(channelId) {
  const [channelsState, setChannelsState] = useState([]);
  const [messages] = useLiveCollection(
    () =>
      channelRepo.messagesForChannel({
        channelId,
      }),
    [],
  );

  return channelsState;
}

export default useMessagesList;
