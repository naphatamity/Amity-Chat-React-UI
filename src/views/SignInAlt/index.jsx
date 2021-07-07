import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useConfig } from '../../components/Config';

// import { connectClientAlt, client } from '../../ekoClient';

function SignInAlt() {
  const { client, connectClientAlt /* customer */ } = useConfig();
  const history = useHistory();
  const [connStat, setConnStat] = useState(null);
  const [userId, setUserId] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const onSubmit = () => {
    if (!client.currentUser) {
      connectClientAlt({
        userId,
        displayName,
      });
      client.setUserMetadata({
        avatarCustomUrl: avatarUrl,
      });
    }
  };

  useEffect(() => {
    client.on('connectionStatusChanged', connectionStatus => {
      if (connectionStatus.newValue === 'connected') {
        history.push('/channel/New Collection Launch');
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          margin: 'auto',
        }}
      >
        <input type="text" placeholder="UserId" onChange={e => setUserId(e.target.value)} />
        <input placeholder="Display name" onChange={e => setDisplayName(e.target.value)} />
        <input placeholder="Avatar URL" onChange={e => setAvatarUrl(e.target.value)} />

        <button type="button" onClick={() => onSubmit()}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}
export default SignInAlt;
