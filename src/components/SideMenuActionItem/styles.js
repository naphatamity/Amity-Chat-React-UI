import styled, { css } from 'styled-components';
import { SecondaryButton } from '../Button';

const actionItemActiveStyles = css`
  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.palette.primary.shade3};
      & > .actionItemChild {
        color: ${theme.palette.primary.main};
      }
    `}
`;

const actionItemContainerStyles = css`
  display: flex;
  align-items: center;
  padding: 5px 8px;
  margin-bottom: 6px;
  color: ${({ theme }) => theme.palette.neutral.main};
  justify-content: left;
  &:hover {
    background-color: ${({ theme }) => theme.palette.base.shade4};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.neutral.shade2};
  }
  ${actionItemActiveStyles}
`;

export const ButtonActionItem = styled(SecondaryButton)`
  ${actionItemContainerStyles}
  width: 100%;
  & > .actionItemChild {
    display: flex;
    flex-grow: 1;
  }
`;

export const AnchorActionItem = styled.a`
  cursor: pointer;
  border-radius: 4px;
  ${actionItemContainerStyles}
  ${({ theme }) => theme.typography.bodyBold}
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  ${({ active, theme }) =>
    active
      ? css`
          background: ${theme.palette.primary.main};
          // TODO: check color with design
          color: white;
        `
      : css`
          background: ${theme.palette.base.shade4};
          color: ${theme.palette.base.main};
        `};
`;
