import styled from 'styled-components';

export const UsersListRowStyled = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 12px;
  }
`;

export const UsersListName = styled.div`
  margin-left: 8px;
`;

export const SelectedCircle = styled.div`
  margin-left: auto;
  color: ${props => (props.isSelected ? ' #1054DE' : '#A5A9B5')};
`;
