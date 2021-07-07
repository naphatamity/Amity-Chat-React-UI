import styled from 'styled-components';

export const SearchInput = styled.input`
  border: 1px solid #ebecef;
  border-radius: 4px;
  padding: 10px 12px;
  flex-grow: 1;
  background: #ebecef;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const CreateChannelWrapper = styled.div`
  padding: 16px;
  position: relative;
`;

export const ScrollContainer = styled.div`
  width: 100%;
  overflow: auto;
  position: relative;
`;

export const StretchedList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  & > * {
    flex: 0 0 auto;
  }
`;

export const SelectedUsersList = styled.div`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 74px;
  position: relative;
  // &:before {
  //   content: '';
  //   position: absolute;
  //   bottom: 0;
  //   right: 0;
  //   background: linear-gradient(to right, transparent 40%, white);
  //   height: 100%;
  //   width: 15%;
  //   z-index: 999;
  // }
`;

export const SelectedUserItem = styled.div`
  padding: 8px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 64px;
  height: 62px;
  font-size: 13px;
  margin-right: 16px;

}
`;

export const LetterDivider = styled.div`
  text-transform: uppercase;
  background: #ebecef;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #a5a9b5;
  width: 100%;
  margin-left: -16px;
  padding: 6px 16px;
  margin-bottom: 12px;
`;

export const UsersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const UsersListRow = styled.li`
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

export const TitleBar = styled.div`
  display: flex;
  flex-flow: row;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
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

export const UnselectButton = styled.button`
  background: #292b32;
  opacity: 0.5;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  color: white;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 4px;
  position: absolute;
  right: 4px;
`;

export const CreateButton = styled.button`
  background: transparent;
  border: none;
  font-size: 15px;
  color: #1054de;
`;
