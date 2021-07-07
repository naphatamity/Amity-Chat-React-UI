import styled from 'styled-components';
import UiKitAvatar from '../Avatar';
import { Close } from '../../icons';

export const Avatar = styled(UiKitAvatar)``;

export const CloseIcon = styled(Close)`
  font-size: 19px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.neutral.main};
  margin-left: auto;
`;

export const ChatDetailsHeader = styled.div`
  display: flex;
  color: ${({ theme }) => theme.palette.neutral.main};
  font-weight: 600;
  font-size: 16px;
  padding: 24px 20px;
`;

export const ChatDetailsContainer = styled.div`
  width: 280px;
  flex-shrink: 0;
  border: solid 1px #e3e4e8;
`;

export const Channel = styled.div`
  display: flex;
  padding: 0 20px 12px 20px;
  border-bottom: 1px solid #ebecef;
`;

export const ChannelInfo = styled.div`
  margin-left: 12px;
`;

export const ChannelName = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
`;

export const CommunityName = styled.div`
  font-size: 12px;
  // color: #999999;
`;
export const PageOne = styled.div`
  margin: 0;
  padding: 0;
  z-index: 8;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  &.slidOut {
    left: -100%;
  }


  &.slideLeft {
    animation: slideLeft 0.5s forwards;
    -webkit-animation: slideLeft 0.5s forwards;
  }

  &.slideBack {
    animation: slideBack 0.5s forwards;
    -webkit-animation: slideBack 0.5s forwards;
  }

  @keyframes slideLeft {
    100% {
      left: -100%;
    }
  }

  @-webkit-keyframes slideLeft {
    100% {
      left: -100%;
    }
  }

  @keyframes slideBack {
    100% {
      left: 0;
    }
  }

  @-webkit-keyframes slideBack {
    100% {
      left: 0;
    }
`;
export const PageTwo = styled.div`
  margin: 0;
  padding: 0;
  z-index: 8;
  top: 0;
  left: 100%;
  position: absolute;
  width: 100%;
  height: 100%;

  &.slidIn {
    left: 0;
  }

  &.slideIn {
    animation: slideIn 0.5s forwards;
    -webkit-animation: slideIn 0.5s forwards;
  }

  &.slideOut {
    animation: slideOut 0.5s forwards;
    -webkit-animation: slideOut 0.5s forwards;
  }

  @keyframes slideIn {
    100% {
      left: 0;
    }
  }

  @-webkit-keyframes slideIn {
    100% {
      left: 0;
    }
  }

  @keyframes slideOut {
    100% {
      left: 100%;
    }
  }

  @-webkit-keyframes slideOut {
    100% {
      left: 100%;
    }
  }
`;

export const DetailsMenuRow = styled.li`
  width: 100%;
  display: flex;
  flexdirection: row;
  justify-content: space-between;
  padding: 12px 20px;
  min-height: 52px;
  border-bottom: 1px solid #ebecef;
  box-sizing: border-box;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & > *.alert {
    color: #fa4d30;
  }
`;
