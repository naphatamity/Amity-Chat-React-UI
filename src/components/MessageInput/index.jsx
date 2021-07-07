import { MessageRepository } from '@amityco/js-sdk';

import { StyledInput } from './styles';

function MessageInput({ channelId }) {
  const sendMessage = text => {
    new MessageRepository().createTextMessage({
      channelId,
      text,
    });
  };

  return <StyledInput placeholder="Type something..." onInput={sendMessage} />;
}

export default MessageInput;
