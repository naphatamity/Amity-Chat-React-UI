import { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import rug from 'random-username-generator';
import { ChannelRepository, ChannelType } from '@amityco/js-sdk';
import ChannelHeader from '../../components/ChannelHeader';
import UsersListRow from '../../components/UsersListRow';
import SelectedUserItem from '../../components/SelectedUserItem';

import { useConfig } from '../../components/Config';
import {
  Wrapper,
  CreateChannelWrapper,
  SearchInput,
  SelectedUsersList,
  LetterDivider,
  UsersList,
  Title,
  TitleBar,
  CreateButton,
  ScrollContainer,
  StretchedList,
} from './styles';

const channelRepo = new ChannelRepository();

const users = [
  { userId: 'bryan', displayName: 'bryan' },
  { userId: 'floyd', displayName: 'floyd' },
  { userId: 'jess', displayName: 'jess' },
  { userId: 'lena', displayName: 'lena' },
  { userId: 'liz', displayName: 'liz' },
  { userId: 'marga', displayName: 'marga' },
  { userId: 'mimi', displayName: 'mimi' },
  { userId: 'mssmith', displayName: 'mssmith' },
  { userId: 'nick', displayName: 'nick' },
  { userId: 'theo', displayName: 'theo' },
];

function groupByLetter(array) {
  return array.reduce((acc, element) => {
    const group = element.displayName ? element.displayName.trim()[0] : element.userId.trim()[0];
    if (!acc[group]) acc[group] = { group, users: [element] };
    else acc[group].users.push(element);
    return acc;
  }, {});
}

// ==========================
function ChannelCreate() {
  const { client } = useConfig();
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');
  const [newChannelId, setNewChannelId] = useState('');
  const usersByLetters = useMemo(() => {
    const filteredUsers = users.filter(item => !search || item.displayName === search);
    return groupByLetter(filteredUsers);
  }, [search]);

  const isSelected = userId => {
    if (selected.indexOf(userId) < 0) {
      return false;
    }
    return true;
  };

  const onSelect = userId => {
    if (!isSelected(userId)) {
      const newArray = [...selected, userId];
      setSelected(newArray);
    }
  };

  const onUnselect = userId => {
    if (!isSelected(userId)) {
      return null;
    }

    setSelected(selected.filter(item => item !== userId));
  };

  const create = () => {
    const userIds = [client.currentUser.model.userId, ...selected];
    const generatedName = rug.generate();
    const createChat = channelRepo.createChannel({
      channelId: newChannelId || generatedName,
      type: ChannelType.Standard,
      userIds,
    });
    createChat.once('dataUpdated', () => {
      history.push('/channels');
    });
  };

  return (
    <Wrapper>
      <ChannelHeader>
        <Link to="/channels" style={{ textDecoration: 'none', color: '#17181C' }}>
          Cancel
        </Link>

        <TitleBar>
          <Title>{`${selected.length} Selected`}</Title>
        </TitleBar>
        <CreateButton onClick={() => create()}>Create</CreateButton>
      </ChannelHeader>
      <CreateChannelWrapper>
        <SearchInput
          style={{ marginBottom: 16 }}
          placeholder="Group name"
          onChange={e => setNewChannelId(e.target.value)}
        />
        <SearchInput placeholder="Search" onChange={e => setSearch(e.target.value)} />
        <SelectedUsersList>
          <ScrollContainer>
            <StretchedList>
              {selected.map(userId => (
                <SelectedUserItem key={userId} userId={userId} onUnselect={onUnselect} />
              ))}
            </StretchedList>
          </ScrollContainer>
        </SelectedUsersList>
        {Object.keys(usersByLetters).map(letter => (
          <div key={letter}>
            <LetterDivider>{letter}</LetterDivider>
            <UsersList>
              {usersByLetters[letter].users.map(({ userId }) => (
                <UsersListRow
                  key={userId}
                  userId={userId}
                  isSelected={isSelected(userId)}
                  onClick={() => (isSelected(userId) ? onUnselect(userId) : onSelect(userId))}
                />
              ))}
            </UsersList>
          </div>
        ))}
      </CreateChannelWrapper>
    </Wrapper>
  );
}

export default ChannelCreate;
