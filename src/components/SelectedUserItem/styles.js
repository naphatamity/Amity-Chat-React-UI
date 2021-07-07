import styled from 'styled-components';

export const SelectedUserItemStyled = styled.li`
  position: relative;
  height: 68px;
  font-size: 13px;
  margin-right: 12px;
}
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const UnselectButton = styled.button`
  background: rgba(41, 43, 50, 0.5);
  height: 16px;
  width: 16px;
  border-radius: 50%;
  color: white;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
`;

export const SelectedUserName = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 64px;
  text-align: center;
  white-space: nowrap;
  height: 18px;
  line-height: 18px;
  font-size: 13px;
`;
