import styled from 'styled-components';

export const AvatarStyled = styled.div`
  border-radius: 50%;
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  background: #d9e5fc;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${props => props.avatarCustomUrl && `background-image: url("${props.avatarCustomUrl}")`};
`;
