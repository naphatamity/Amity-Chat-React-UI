import { useEffect, useState } from 'react';
import { List } from 'antd';
import { ChannelRepository, ChannelMembershipRepository, UserRepository } from '@amityco/js-sdk';

import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/pro-regular-svg-icons';
import { faUserFriends } from '@fortawesome/pro-solid-svg-icons';
import customizableComponent from '../../utils/customization';
import useLiveObject from '../../hooks/useLiveObject';
import useLiveCollection from '../../hooks/useLiveCollection';

import ConditionalRender from '../ConditionalRender';
import SideMenuActionItem from '../SideMenuActionItem';
import { /* Plus, */ Remove } from '../../icons';

import {
  Avatar,
  ChatDetailsContainer,
  ChatDetailsHeader,
  CloseIcon,
  Channel,
  ChannelInfo,
  CommunityName,
  ChannelName,
  // DetailsMenuRow,
  PageOne,
  PageTwo,
} from './styles';

import { DetailsMenuList } from '../../views/ChannelDetails/styles';

const userRepo = new UserRepository();

const channelRepo = new ChannelRepository();

const ChatDetails = ({ channelId, onClose, setCurrenChannelId }) => {
  // const [avatarUrl, setAvatarUrl] = useState('');
  const [membersClassName, setMembersClassName] = useState('');
  const [homeClassName, setHomeClassName] = useState('');
  const channel = useLiveObject(() => channelRepo.channelForId(channelId), [channelId]);
  const channelMembershipRepo = new ChannelMembershipRepository(channelId);

  const leaveChannel = async () => {
    await channelMembershipRepo.leave();
    setCurrenChannelId(null);
  };

  /*   const removeUser = async userId => {
    await channelMembershipRepo.removeMembers({ userIds: [userId] });
  };

  const addUser = async userId => {
    await channelMembershipRepo.addMembers({ userIds: [userId] });
  }; */
  const [members /*  hasMore, loadMore */] = useLiveCollection(
    () => channelMembershipRepo.members(),
    /* @ts-ignore */
    [membersClassName, channel],
  );

  useEffect(() => {
    if (membersClassName === 'slidIn slideOut') {
      setTimeout(() => {
        setMembersClassName('');
        setHomeClassName('');
      }, 600);
    }
  }, [membersClassName]);

  const handleClick = () => {
    setMembersClassName('slideIn');
    setHomeClassName('slideLeft');
  };

  const handleBackClick = () => {
    setMembersClassName('slidIn slideOut');
    setHomeClassName('slidOut slideBack');
  };

  // const onSubmit = () => {
  //   channelRepo
  //     .setMetadata({
  //       channelId,
  //       metadata: { avatarCustomUrl: avatarUrl },
  //     })
  //     .then(() => {
  //       // success
  //       console.log('Metadata set success');
  //     })
  //     .catch(error => {
  //       console.log('Metadata set fail', error);
  //     });
  // };

  return (
    <ChatDetailsContainer>
      <ChatDetailsHeader>
        Chat Detail
        <CloseIcon onClick={onClose} />
      </ChatDetailsHeader>
      <Channel>
        {/* @ts-ignore */}
        <Avatar avatarCustomUrl={channel.metadata?.avatarCustomUrl} />
        <ChannelInfo>
          <CommunityName>Channel Name</CommunityName>
          {/* @ts-ignore */}
          <ChannelName>{channel.displayName || channel.channelId}</ChannelName>
        </ChannelInfo>
        {/* 
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            margin: 'auto',
          }}
        >
          <input type="text" placeholder="avatar" onChange={e => setAvatarUrl(e.target.value)} />

          <button type="button" onClick={() => onSubmit()}>
            SUBMIT
          </button>
        </div> */}
      </Channel>
      <div style={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
        <PageOne className={homeClassName}>
          <DetailsMenuList>
            <SideMenuActionItem
              icon={<FaIcon icon={faUserFriends} />}
              onClick={() => handleClick()}
              active={false}
              element="button"
              style={{ padding: '12px 20px' }}
            >
              <div>Members</div>
              <div style={{ marginLeft: 'auto' }}>
                {/* @ts-ignore */}
                <span>{channel.memberCount}</span>
                <FaIcon icon={faChevronRight} style={{ marginLeft: 8 }} />
              </div>
            </SideMenuActionItem>
            <SideMenuActionItem
              icon={<Remove height="20px" />}
              onClick={() => leaveChannel()}
              active={false}
              element="button"
              style={{ padding: '12px 20px' }}
            >
              <div className="alert">Leave Chat</div>
            </SideMenuActionItem>
          </DetailsMenuList>
        </PageOne>
        <PageTwo className={membersClassName}>
          <ConditionalRender condition={membersClassName}>
            <div style={{ position: 'relative', width: '100%', height: 'calc(100% - 186px)' }}>
              <SideMenuActionItem
                icon={<FaIcon icon={faChevronLeft} />}
                onClick={() => handleBackClick()}
                active={false}
                element="button"
              >
                Members
              </SideMenuActionItem>

              <div
                style={{ overflow: 'auto', position: 'absolute', height: '100%', width: '100%' }}
              >
                <List
                  itemLayout="horizontal"
                  /* @ts-ignore */
                  dataSource={members}
                  /* @ts-ignore */
                  renderItem={item => <ListItem userId={item.userId} />}
                />
              </div>
              {/* <SideMenuActionItem
                icon={<Plus height="20px" />}
                onClick={() => addUser('hard-working-senator-24')}
                active={false}
                element="button"
              >
                add user
              </SideMenuActionItem> */}
            </div>
          </ConditionalRender>
        </PageTwo>
      </div>
    </ChatDetailsContainer>
  );
};

export default customizableComponent('ChatDetails', ChatDetails);

const ListItem = ({ userId }) => {
  const user = useLiveObject(() => userRepo.userForId(userId), [userId]);
  return (
    <List.Item style={{ padding: 12 }}>
      <List.Item.Meta
        avatar={
          /* @ts-ignore */
          <Avatar size={24} avatarCustomUrl={user.metadata?.avatarCustomUrl} />
        }
        /* @ts-ignore */
        title={user.displayName || userId}
      />
    </List.Item>
  );
};
