import { useState, useEffect } from 'react';
import { ChannelRepository, ChannelMembership } from '@amityco/js-sdk';
import unionBy from 'lodash/unionBy';

import useLiveCollection from './useLiveCollection';

const channelRepo = new ChannelRepository();

function useChannelsList(membershipFilter) {
  const [channelsState, setChannelsState] = useState([]);
  const [channels] = useLiveCollection(() => channelRepo.allChannels());

  useEffect(() => {
    if (!membershipFilter || !Object.values(ChannelMembership).includes(membershipFilter)) {
      setChannelsState(channels);
      return;
    }

    const membershipLiveObjectsStorage = [];
    channels.forEach(channel => {
      const membershipLiveObject = channel.membership.myMembership;
      membershipLiveObjectsStorage.push(membershipLiveObject);

      if (membershipLiveObject?.model?.membership === membershipFilter) {
        setChannelsState(prevState => unionBy(prevState, [channel], item => item.channelId));
      }

      membershipLiveObject.on('dataUpdated', modelData => {
        if (modelData?.membership !== membershipFilter) return;
        setChannelsState(prevState => unionBy(prevState, [channel], item => item.channelId));
      });
    });

    return () => {
      while (membershipLiveObjectsStorage.length > 0) {
        const storedLiveObject = membershipLiveObjectsStorage.pop();
        storedLiveObject.removeAllListeners();
      }
    };
  }, [membershipFilter, channels]);

  return channelsState;
}

export default useChannelsList;
