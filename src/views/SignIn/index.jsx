import { useEffect, useState } from 'react';
import { ChannelRepository, ChannelType } from '@amityco/js-sdk';

import { useHistory } from 'react-router-dom';
import { useConfig } from '../../components/Config';
import LoadingCircle from '../../components/LoadingCircle';

// const channelsList = ['Tech fans', 'Online classroom', 'Bike enthusiasts'];
const channelsList = ['New Collection Launch'];
const channelRepo = new ChannelRepository();
function SignIn() {
  const { client, connectClientAlt, customer } = useConfig();
  const history = useHistory();
  const [connStat, setConnStat] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('useEffect connect user signin', { client, customer });

    if (!client.currentUser && customer) {
      // eslint-disable-next-line no-console
      console.log('connect user signin', customer);

      connectClientAlt({ userId: customer.email, displayName: customer.name });
    }
  });

  useEffect(() => {
    client.on('connectionStatusChanged', connectionStatus => {
      if (connectionStatus.newValue === 'connected') {
        channelsList.forEach(channelId => {
          channelRepo.joinChannel({
            channelId,
            type: ChannelType.Standard,
          });
        });

        history.push('/channels');
      } else {
        setConnStat(connectionStatus.newValue);
      }
    });

    if (client.connectionStatus === 'connected') {
      history.push('/channels');
    }
    return function cleanup() {
      client.removeAllListeners('dataUpdated');
    };
  }, [history, connStat]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        flexGrow: 1,
      }}
    >
      <div style={{ width: '80%', margin: 'auto' }}>
        <LoadingCircle />
        ..
      </div>
    </div>
  );
}
export default SignIn;
