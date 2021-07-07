/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import Channel from './views/Channel';
import ChannelCreate from './views/ChannelCreate';
import ChannelDetails from './views/ChannelDetails';
import Channels from './views/Channels';
import SignIn from './views/SignIn';
import SignInAlt from './views/SignInAlt';
import SignInOld from './views/SignInOld';
import buildGlobalTheme from './theme';
import { useConfig } from './components/Config';
import LoadingCircle from './components/LoadingCircle';
import Localisation from './components/Localisation';

import './App.css';

const mock = {
  api: '',
  customer: {
    accept_marketing: '',
    email: '',
    first_name: '',
    id: '',
    last_name: '',
    name: '',
  },
  setting: {
    customerOnly: true,
    primaryColor: 'F76B6A',
    secondaryColor: 'F77B7A',
  },
  dm: '',
};

function App() {
  const { initialize, customer } = useConfig();
  const [client, setClient] = useState(null);
  const sendMessage = (msg: string) => {
    window.parent.postMessage(msg, '*');
  };
  const handleMessage = () => {
    setClient(initialize(mock));
  };

  useEffect(() => {
    sendMessage('chatInitRequest');
  });

  useEffect(() => {
    const handleEvent = () => {
      handleMessage();
    };
    window.addEventListener('message', handleEvent, false);
    return function cleanup() {
      window.removeEventListener('message', handleEvent);
    };
  });
  // eslint-disable-next-line no-console
  console.log('app customer', customer);
  return (
    <ThemeProvider theme={buildGlobalTheme({})}>
      <Localisation locale="en">
        <div className="App">
          {client && customer ? (
            <Router>
              <Switch>
                <Route exact path="/" children={<SignIn />} />
                <Route exact path="/secret" children={<SignInAlt />} />
                <Route exact path="/login" children={<SignInOld />} />
                <Route path="/channels" children={<Channels />} />
                <Route exact path="/channel/create" children={<ChannelCreate />} />
                <Route path="/channel/:channelId/details" children={<ChannelDetails />} />
                <Route path="/channel/:channelId" children={<Channel />} />
              </Switch>
            </Router>
          ) : (
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
                <LoadingCircle />.
              </div>
            </div>
          )}
        </div>
      </Localisation>
    </ThemeProvider>
  );
}

export default App;
