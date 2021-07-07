import MessageInput from '../MessageInput';
// import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";
// import { faPaperclip } from "@fortawesome/pro-regular-svg-icons";

import { StyledFooter } from './styles';

function ChannelFooter({ channelId }) {
  return (
    <StyledFooter>
      {/* <button
        style={{ marginRight: 8, background: "transparent", border: "none" }}
      >
        <FaIcon icon={faPaperclip} />
      </button> */}
      <MessageInput channelId={channelId} />
    </StyledFooter>
  );
}

export default ChannelFooter;
