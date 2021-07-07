import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import NameInput from '../../components/NameInput';
import { connectClient, client } from '../../ekoClient';

function SignInOld() {
  const history = useHistory();
  const [connStat, setConnStat] = useState(null);

  const handleOnInput = userId => {
    connectClient(userId);
  };

  useEffect(() => {
    client.on('connectionStatusChanged', connectionStatus => {
      if (connectionStatus.newValue === 'connected') {
        history.push(
          history.location.state && history.location.state.from
            ? history.location.state.from
            : `/channels`,
        );
      } else {
        setConnStat(connectionStatus.newValue);
      }
    });

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
        <NameInput handleOnInput={handleOnInput} />
      </div>
    </div>
  );
}
export default SignInOld;
