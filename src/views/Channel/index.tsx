import { useState, useEffect, useRef, RefObject } from 'react';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEllipsisH } from '@fortawesome/pro-regular-svg-icons';

import { useParams, useHistory, useLocation, Link } from 'react-router-dom';
import { ChannelRepository, ChannelType, ChannelMembershipRepository } from '@amityco/js-sdk';

import { useConfig } from '../../components/Config';
import Messages from '../../components/Messages';
import ChannelHeader from '../../components/ChannelHeader';
import ChannelFooter from '../../components/ChannelFooter';
import LoadingCircle from '../../components/LoadingCircle';
import Avatar from '../../components/Avatar';
import {
  ChannelWrapper,
  MessagesWrapper,
  MessagesContainer,
  SomeWrapper,
  Title,
  TitleBar,
  ChannelMenu,
} from './styles';

const channelRepo = new ChannelRepository();

type InjectedProps = {
  channelId: string;
  channel: any;
  messagesEndRef: RefObject<HTMLDivElement>;
};

export default () => {
  const { channelId } = useParams<{ channelId: string }>();
  const { client } = useConfig();
  const location = useLocation();
  const history = useHistory();
  const [channel, setChannel] = useState(null);

  const messagesEndRef = useRef(null);
  const channelMembershipRepo = new ChannelMembershipRepository(channelId);

  useEffect(() => {
    if (!client.currentUser) {
      history.push('/', { from: location.pathname });
    } else {
      const channelLiveObject = channelRepo.joinChannel({
        channelId,
        type: ChannelType.Standard,
      });
      // FIXME: shouldn’t use 'any' type
      channelLiveObject.on('dataUpdated', (updatedChannel: any) => {
        channelMembershipRepo.startReading();
        setChannel(updatedChannel);
      });
      // since data might have not changed, channel would still be null so...
      channelLiveObject.model &&
        setTimeout(() => {
          return setChannel(channelLiveObject.model);
        }, 500);

      return function cleanup() {
        channelMembershipRepo.stopReading();
        channelLiveObject.removeAllListeners('dataUpdated');
      };
    }
  }, [history, location.pathname, channelId]);

  return <Channel channelId={channelId} channel={channel} messagesEndRef={messagesEndRef} />;
};

export function Channel({ channelId, channel, messagesEndRef }: InjectedProps) {
  return (
    <ChannelWrapper>
      <ChannelHeader>
        <Link to="/channels">
          <FaIcon icon={faChevronLeft} style={{ marginRight: 8 }} />
        </Link>

        <TitleBar>
          <Avatar avatarCustomUrl={channel?.metadata?.avatarCustomUrl} />
          <Title>{(channel && channel.displayName) || channelId}</Title>
        </TitleBar>

        <ChannelMenu>
          <Link to={`/channel/${channelId}/details`}>
            <FaIcon icon={faEllipsisH} style={{ marginRight: 8 }} />
          </Link>
        </ChannelMenu>
      </ChannelHeader>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
        }}
      >
        <input
          type="text"
          placeholder="avatar"
          onChange={(e) => setAvatarUrl(e.target.value)}
        />

        <button onClick={() => onSubmit()}>SUBMIT</button>
      </div> */}

      {/* <UiKitChat /> */}
      <MessagesWrapper>
        <MessagesContainer>
          <SomeWrapper>
            {!channel ? (
              <div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
                <LoadingCircle />
                ...
              </div>
            ) : (
              <Messages />
            )}
            <div ref={messagesEndRef} />
          </SomeWrapper>
        </MessagesContainer>
        <ChannelFooter channelId={channelId} />
      </MessagesWrapper>
    </ChannelWrapper>
  );
}
