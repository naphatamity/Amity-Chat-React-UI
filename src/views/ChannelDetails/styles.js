import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const DetailsMenuWrapper = styled.div`
  padding: 16px;
`;

export const DetailsMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const DetailsMenuRowStyled = styled.li`
  width: 100%;
  display: flex;
  flexdirection: row;
  justify-content: space-between;
  padding: 8px;
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

export const IconWrapperBg = styled.div`
  background: #ebecef;
  border-radius: 4px;
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
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
