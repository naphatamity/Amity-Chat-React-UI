import { useEffect, memo } from 'react';

import { useConfig } from '../../components/Config';
import ChatHome from '../../components/ChatHome';

import { Wrapper } from './styles';

const Channels = memo(() => {
  const { client, connectClientAlt, customer } = useConfig();

  useEffect(() => {
    if (!client.currentUser) {
      // eslint-disable-next-line no-console
      console.log('connect user channels', customer);
      connectClientAlt({ userId: customer.email, displayName: customer.name });
    }
  }, [client]);

  return (
    <Wrapper>
      <ChatHome />
    </Wrapper>
  );
});
export default Channels;
