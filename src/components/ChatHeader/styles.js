import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import UiKitAvatar from '../Avatar';

export const Avatar = styled(UiKitAvatar)``;

export const DetailsIcon = styled(FaIcon).attrs({ icon: faBars })`
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.neutral.main};
  align-self: center;
`;

export const ChatHeaderContainer = styled.div`
  padding: 0 20px;
  background: ${({ theme }) => theme.palette.system.background};
  border-top: 1px solid #e3e4e8;
  border-bottom: 1px solid #e3e4e8;
  display: flex;
  justify-content: space-between;
`;

export const Channel = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
  align-items: center;
`;

export const ChannelInfo = styled.div`
  margin-left: 8px;
`;

export const ChannelName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MemberCount = styled.div`
  font-size: 12px;
  color: #999999;
`;

export const GroupIcon = styled.span`
  border-radius: 50%;
  background: #5c6070;
  color: white;
  height: 16px;
  width: 16px;
  font-size: 8px;
  line-height: 16px;
  margin-right: 4px;
  margin-left: 0 !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
