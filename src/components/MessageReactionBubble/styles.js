import styled from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  width: calc(80% - 16px);
  ${props => props.isOwn && 'margin-left: auto'};
`;

export const MainMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  flex-grow: 1;
  text-align: left;
`;

export const MessageMeta = styled.div`
  position: relative;
  ${props => (props.isOwn ? 'text-align: right' : 'text-align: left')};
`;

export const ReactButton = styled.button`
  background: transparent;
  font-size: 13px;
  padding: 0;
  margin: 0;
  color: #898e9e;
  letter-spacing: -0.08px;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;

export const MessageTime = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  margin-left: 8px;
`;

export const MessageBubble = styled.div`
  color: ${props => (props.isOwn ? 'white' : '#292B32')};
  background: ${props => (props.isOwn ? '#1054DE' : '#ebecef')};
  margin: 4px 0;
  border-radius: ${props => (props.isOwn ? '6px 0px 6px 6px' : '0px 6px 6px 6px')};
  padding: 8px;
  position: relative;
`;

export const ReactionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  position: absolute;
  bottom: -12px;
  right: -12px;
  align-items: center;
  border-radius: 24px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));

  & > span {
    color: #898e9e;
    font-size: 13px;
    margin-left: 4px;
    margin-right: 6px;
  }
`;

export const Reaction = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4a82f2;
  color: white;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  font-size: 12px;

  &:not(:first-of-type) {
    margin-left: -8px;
    z-index: -1;
  }
`;

export const ReactionsBubble = styled.div`
  background: #ffffff;
  border-radius: 100px;
  height: 36px;
  display: inline-flex
  color: #898E9E;
  font-size: 18px;
  position: absolute;
    left: 0;
    top: -50%;
    padding: 0 2px;

  & > svg {
    margin: 8px;
    color: #898E9E;
  }
`;
