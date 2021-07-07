import styled from 'styled-components';
import SideMenuItem from '../SideMenuItem';
import UiKitAvatar from '../Avatar';

export const ChatItemContainer = styled(SideMenuItem)``;

export const Avatar = styled(UiKitAvatar)`
  margin-right: 8px;
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
`;

export const UnreadCount = styled.div`
  padding: 0 5px;
  height: 20px;
  color: #fff;
  font-size: 13px;
  margin-left: auto;
  background: #f9563a;
  border-radius: 20px;
`;

export const UnreadCounter = styled.div`
  background: #fa4d30;
  color: white;
  border-radius: 20px;
  height: 20px;
  padding: 0px 6.5px;
  font-size: 13px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 13px;
  margin-left: auto !important;
`;

export const ChannelDescription = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex-grow: 1;
  // max-width: 60%;
`;

export const ChannelDetails = styled.div`
  flex-grow: 1;
  display: flex;
`;
export const ChannelTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  margin: 0;
  margin-left: 12px;
  margin-right: 12px;
  letter-spacing: -0.41px;
  text-align: left;
  text-decoration: none;
  color: #292b32;
  display: inline-block;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`;
