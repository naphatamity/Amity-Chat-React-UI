import { useState /* useMemo */ } from 'react';
import { useParams } from 'react-router-dom';
import { MessageRepository } from '@amityco/js-sdk';
import useLiveCollection from '../../hooks/useLiveCollection';
import { useConfig } from '../Config';

import Message from '../Message';
import { InfiniteScrollContainer, MessageListContainer } from './styles';

const messageRepo = new MessageRepository();

// eslint-disable-next-line no-unused-vars
const mockData = {
  'Bike enthusiasts': [
    {
      messageId: 'c643ab35-bac2-4123-8775-f8591ff88186',
      channelId: 'Bike enthusiasts',
      userId: 'mimi',
      data: { text: 'Count me in! ✋' },
      type: 'text',
      tags: [],
      channelSegment: 3,
      isDeleted: false,
      createdAt: '2021-04-29T08:44:58.313Z',
      editedAt: '2021-04-29T08:44:58.312Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { love: 3, like: 5, care: 2 },
      reactionsCount: 10,
      myReactions: [],
      user: {
        model: {
          userId: 'mimi',
          displayName: 'mimi',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Mimi.png' },
          createdAt: '2021-04-29T07:11:04.960Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: 'a4ce7399-d1e5-444f-aeb7-810292ffc56a',
      channelId: 'Bike enthusiasts',
      userId: 'floyd',
      data: { text: 'Should we do it next sunday, meet at the park?' },
      type: 'text',
      tags: [],
      channelSegment: 2,
      isDeleted: false,
      createdAt: '2021-04-29T08:43:43.629Z',
      editedAt: '2021-04-29T08:43:43.628Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { love: 3, like: 3, care: 3 },
      reactionsCount: 9,
      myReactions: [],
      user: {
        model: {
          userId: 'floyd',
          displayName: 'floyd',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Floyd.png' },
          createdAt: '2021-04-29T07:10:19.300Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: 'b8c11df8-f33e-4945-8e20-0ec0aaf116db',
      channelId: 'Bike enthusiasts',
      userId: 'lena',
      data: { text: 'Hey, guys! Time to plan our next meet up' },
      type: 'text',
      tags: [],
      channelSegment: 1,
      isDeleted: false,
      createdAt: '2021-04-29T08:23:56.648Z',
      editedAt: '2021-04-29T08:23:56.647Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { love: 1, like: 1 },
      reactionsCount: 2,
      myReactions: [],
      user: {
        model: {
          userId: 'lena',
          displayName: 'lena',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Lena.png' },
          createdAt: '2021-04-29T07:09:18.913Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
  ],
  'Online classroom': [
    {
      messageId: '4d01b62c-f75b-46f1-b361-14317cc6c355',
      channelId: 'Online classroom',
      userId: 'liz',
      data: { text: 'Jess, I shared the link to you in DM!' },
      type: 'text',
      tags: [],
      channelSegment: 7,
      isDeleted: false,
      createdAt: '2021-04-29T08:49:23.380Z',
      editedAt: '2021-04-29T08:49:23.378Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { like: 2, care: 1 },
      reactionsCount: 3,
      myReactions: [],
      user: {
        model: {
          userId: 'liz',
          displayName: 'liz',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Liz.png' },
          createdAt: '2021-04-29T07:33:30.817Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: '0653b952-0cbf-43c7-b386-67d7b3a88171',
      channelId: 'Online classroom',
      userId: 'jess',
      data: { text: 'Btw, guys where can I sign up for the creative workshop next month?' },
      type: 'text',
      tags: [],
      channelSegment: 6,
      isDeleted: false,
      createdAt: '2021-04-29T08:49:00.985Z',
      editedAt: '2021-04-29T08:49:00.984Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: {},
      reactionsCount: 0,
      myReactions: [],
      user: {
        model: {
          userId: 'jess',
          displayName: 'jess',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Jess.png' },
          createdAt: '2021-04-29T07:32:24.377Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: 'a3607af8-c7d6-4e1e-9003-c7d072cff8e0',
      channelId: 'Online classroom',
      userId: 'bryan',
      data: { text: 'Thanks, Ms Smith!' },
      type: 'text',
      tags: [],
      channelSegment: 5,
      isDeleted: false,
      createdAt: '2021-04-29T08:48:48.679Z',
      editedAt: '2021-04-29T08:48:48.678Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: {},
      reactionsCount: 0,
      myReactions: [],
      user: {
        model: {
          userId: 'bryan',
          displayName: 'bryan',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Bryan.png' },
          createdAt: '2021-04-29T07:30:40.472Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: 'f2c0dbaf-c02a-4f49-9741-bfd5d1cc6544',
      channelId: 'Online classroom',
      userId: 'mssmith',
      data: { text: 'Armed Heists by Robin Banks' },
      type: 'text',
      tags: [],
      channelSegment: 4,
      isDeleted: false,
      createdAt: '2021-04-29T08:31:04.346Z',
      editedAt: '2021-04-29T08:31:04.344Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: {},
      reactionsCount: 0,
      myReactions: [],
      user: {
        model: {
          userId: 'mssmith',
          displayName: 'mssmith',
          roles: [],
          metadata: {
            avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Ms%20Smith.png',
          },
          createdAt: '2021-04-29T07:29:47.885Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: '2ad5429c-9532-450f-bebb-ef25ff79549b',
      channelId: 'Online classroom',
      userId: 'mssmith',
      data: { text: 'Sea Birds by Al Batross' },
      type: 'text',
      tags: [],
      channelSegment: 3,
      isDeleted: false,
      createdAt: '2021-04-29T08:30:53.443Z',
      editedAt: '2021-04-29T08:30:53.442Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: {},
      reactionsCount: 0,
      myReactions: [],
      user: {
        model: {
          userId: 'mssmith',
          displayName: 'mssmith',
          roles: [],
          metadata: {
            avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Ms%20Smith.png',
          },
          createdAt: '2021-04-29T07:29:47.885Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: '3661d2c9-8266-49f4-a9f2-ce824053c232',
      channelId: 'Online classroom',
      userId: 'mssmith',
      data: { text: 'Teach Me! by I. Wanda Know' },
      type: 'text',
      tags: [],
      channelSegment: 2,
      isDeleted: false,
      createdAt: '2021-04-29T08:30:41.916Z',
      editedAt: '2021-04-29T08:30:41.915Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: {},
      reactionsCount: 0,
      myReactions: [],
      user: {
        model: {
          userId: 'mssmith',
          displayName: 'mssmith',
          roles: [],
          metadata: {
            avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Ms%20Smith.png',
          },
          createdAt: '2021-04-29T07:29:47.885Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: 'b3a5340e-66e7-4d28-ac6f-6ff27c27b133',
      channelId: 'Online classroom',
      userId: 'mssmith',
      data: { text: 'Hey, everyone! Here’s the list of readings for next week’s discussion' },
      type: 'text',
      tags: [],
      channelSegment: 1,
      isDeleted: false,
      createdAt: '2021-04-29T08:30:26.699Z',
      editedAt: '2021-04-29T08:30:26.699Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { like: 1 },
      reactionsCount: 1,
      myReactions: [],
      user: {
        model: {
          userId: 'mssmith',
          displayName: 'mssmith',
          roles: [],
          metadata: {
            avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Ms%20Smith.png',
          },
          createdAt: '2021-04-29T07:29:47.885Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
  ],
  'Tech fans': [
    {
      messageId: 'ebeed016-e4ec-4c7f-80a2-73659b27467c',
      channelId: 'Tech fans',
      userId: 'marga',
      data: { text: 'I thought they’ll release a new model' },
      type: 'text',
      tags: [],
      channelSegment: 4,
      isDeleted: false,
      createdAt: '2021-04-29T08:47:00.521Z',
      editedAt: '2021-04-29T08:47:00.521Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { love: 1, like: 1 },
      reactionsCount: 2,
      myReactions: [],
      user: {
        model: {
          userId: 'marga',
          displayName: 'marga',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Marga.png' },
          createdAt: '2021-04-29T07:27:41.980Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: 'a059f166-4c6e-46b0-9268-6da78ba70955',
      channelId: 'Tech fans',
      userId: 'theo',
      data: { text: 'Ya, man… it’s just purple 👀' },
      type: 'text',
      tags: [],
      channelSegment: 2,
      isDeleted: false,
      createdAt: '2021-04-29T08:46:20.379Z',
      editedAt: '2021-04-29T08:46:20.379Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { love: 1, like: 1 },
      reactionsCount: 2,
      myReactions: [],
      user: {
        model: {
          userId: 'theo',
          displayName: 'theo',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Theo.png' },
          createdAt: '2021-04-29T07:23:35.969Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
    {
      messageId: 'dd9f17ee-1c7c-465a-9719-6f62bc3bb20b',
      channelId: 'Tech fans',
      userId: 'nick',
      data: { text: 'Did anyone see the latest model?' },
      type: 'text',
      tags: [],
      channelSegment: 1,
      isDeleted: false,
      createdAt: '2021-04-29T08:27:06.857Z',
      editedAt: '2021-04-29T08:27:06.857Z',
      hashFlag: null,
      flagCount: 0,
      syncState: 1,
      reactions: { care: 1 },
      reactionsCount: 1,
      myReactions: [],
      user: {
        model: {
          userId: 'nick',
          displayName: 'nick',
          roles: [],
          metadata: { avatarCustomUrl: 'https://sandbox1.dev.amity.co/avatars/single/Nick.png' },
          createdAt: '2021-04-29T07:22:48.087Z',
          hashFlag: null,
          flagCount: 0,
        },
      },
    },
  ],
};
// const demoUsersIds = [
//   'lena',
//   'floyd',
//   'mimi',
//   'nick',
//   'theo',
//   'marga',
//   'mssmith',
//   'bryan',
//   'jess',
//   'liz',
// ];

function Messages() {
  const { client } = useConfig();
  const { channelId } = useParams();
  const [showReactions, setShowReactions] = useState(null);
  const [messages] = useLiveCollection(() => messageRepo.messagesForChannel({ channelId }), [
    channelId,
    setShowReactions,
  ]);

  const { currentUserId } = client;

  // const filteredMessages = useMemo(() => {
  //   const canDisplay = userId => {
  //     // if (userId === currentUserId || demoUsersIds.indexOf(userId) >= 0) {
  //     if (userId === currentUserId) {
  //       return true;
  //     }
  //     return false;
  //   };

  //   if (mockData[channelId]) {
  //     return [...messages.filter(message => canDisplay(message.userId)), ...mockData[channelId]];
  //   }
  //   return messages.filter(message => canDisplay(message.userId));
  // }, [messages, currentUserId]);

  return (
    <InfiniteScrollContainer>
      <MessageListContainer>
        {messages.map((message, i) => {
          const nextMessage = messages[i + 1];
          const consequent = nextMessage && nextMessage.userId === message.userId;
          const outgoing = message.userId === currentUserId;

          return (
            <Message
              key={message.messageId}
              nextMessage={nextMessage}
              messageId={message.messageId}
              outgoing={outgoing}
              setShowReactions={setShowReactions}
              showReactions={showReactions}
              consequent={consequent}
            />
          );
        })}
      </MessageListContainer>
    </InfiniteScrollContainer>
  );
}

export default Messages;
