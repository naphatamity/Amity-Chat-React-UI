import onClickOutside from 'react-onclickoutside';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faHeart, faThumbsUp } from '@fortawesome/pro-solid-svg-icons';
import { ReactionsBubble } from './styles';

function MessageReactionBubble({
  /* messageId */
  setShowReactions,
  /*   showReactions,
   */ handleReaction,
}) {
  MessageReactionBubble.handleClickOutside = () => setShowReactions(null);

  // if (showReactions && showReactions === messageId) {
  return (
    <ReactionsBubble>
      <FaIcon icon={faThumbsUp} onClick={() => handleReaction('like')} />
      <FaIcon icon={faHeart} onClick={() => handleReaction('love')} />
      <FaIcon icon={faHandHoldingHeart} onClick={() => handleReaction('care')} />
    </ReactionsBubble>
  );
  // }
  // return null;
}

const clickOutsideConfig = {
  handleClickOutside: () => MessageReactionBubble.handleClickOutside,
};

export default onClickOutside(MessageReactionBubble, clickOutsideConfig);
