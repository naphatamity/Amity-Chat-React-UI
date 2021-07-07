import styled from 'styled-components';

export const ChannelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MessagesWrapper = styled.div`
  background: rgba(235, 236, 239, 0.3);
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  position: relative;
  overflow-x: hidden;
  flex-basis: 0px;
  overflow-y: hidden;
`;

export const MessagesContainer = styled.div`
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  position: relative;
  box-sizing: border-box;
`;

export const SomeWrapper = styled.div`
  transform: translateY(0);
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  position: relative;
`;

export const ChannelMenu = styled.div`
  margin-left: auto;
`;

export const TitleBar = styled.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  align-items: center;
  ${props => props.simple && 'justify-content: center'};
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
