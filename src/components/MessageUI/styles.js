import styled from 'styled-components';
import UiKitAvatar from '../Avatar';
import { Close, EllipsisV, Save, Trash } from '../../icons';

export const SystemMessageContainer = styled.span`
  opacity: 0.5;
`;

export const EditingContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const EditingInput = styled.input`
  height: 34px;
  padding: 6px;
  margin: 5px;
  outline: none;
  border: 1px solid #e3e4e8;
  border-radius: 4px;
`;

export const SaveIcon = styled(Save)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;

export const DeleteIcon = styled(Trash)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  opacity: 0.7;
  padding: 0 10px;
  cursor: pointer;
`;

export const MessageOptionsIcon = styled(EllipsisV)`
  opacity: 0.5;
  font-size: 11px;
  padding: 0 5px;
  cursor: pointer;
`;

export const Avatar = styled(UiKitAvatar)`
  margin-right: auto;
`;

export const MessageWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 60%;
  min-width: 60px;
  ${({ incoming }) => !incoming && 'align-self: flex-end;'}
`;

export const MessageContainer = styled.div`
  min-width: 140px;
`;

export const AvatarWrapper = styled.div`
  width: 52px;
  flex-shrink: 0;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.palette.neutral.main};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const MessageBody = styled.div`
  position: relative;
  word-break: break-word;
  padding: 8px;

  display: flex;
  flex-direction: column;
  ${({ theme, incoming }) =>
    incoming
      ? `
  background: #e3e4e8;
  border-radius: 0px 6px 6px 6px;
`
      : `
  background: ${theme.palette.primary.main};
  color: #fff;
  border-radius: 6px 0px 6px 6px;
`}
`;

export const MessageImage = styled.img`
  max-width: 400px;
`;

export const MessageDate = styled.div`
  font-size: 13px;
  opacity: 0.5;
  margin-left: auto;
`;

export const BottomLine = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
`;

export const ReactionContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  position: absolute;
  bottom: -18px;

  ${props => (props.isOwn ? 'left: -12px;' : 'right: -12px;')};

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

  &:first-of-type {
    z-index: -1;
  }
  &:nth-of-type(2) {
    margin-left: -8px;
    z-index: -2;
  }
  &:nth-of-type(3) {
    margin-left: -8px;
    z-index: -3;
  }
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
export const MessageMeta = styled.div`
  position: relative;
  margin-bottom: 8px;
  ${props => (props.isOwn ? 'text-align: right' : 'text-align: left')};
`;
