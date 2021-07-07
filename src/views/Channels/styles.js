import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: inherit;
`;

export const ChannelsWrapper = styled.div`
  padding: 16px;
`;

export const ChannelsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ChannelRow = styled.li`
  width: 100%;
  display: flex;
  flexdirection: row;
  height: 72px;
`;

export const ChannelTitle = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  margin: 0;
  letter-spacing: -0.41px;
  text-align: left;
  text-decoration: none;
  color: #292b32;
  display: inline-block;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`;

export const ChannelDetails = styled.div`
  border-bottom: 1px solid #ebecef;
  flex-grow: 1;
  display: flex;
  margin-bottom: 12px;
`;

export const ChannelDescription = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex-grow: 1;
  max-width: 60%;
`;

export const RecentMessage = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  margin: 2px 0 8px;
  color: #898e9e;
`;
export const ChannelMeta = styled.div`
  margin-left: auto;
  text-align: right;
`;

export const LastActivity = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
  color: #898e9e;
`;

export const UnreadCounter = styled.div`
  background: #fa4d30;
  color: white;
  border-radius: 20px;
  height: 20px;
  padding: 0px 6.5px;
  // width: auto;
  font-size: 13px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 13px;
  margin-bottom: 8px;
`;

export const ChannelMenu = styled.div`
  margin-left: auto;
`;

export const TitleBar = styled.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  margin-left: 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
`;
