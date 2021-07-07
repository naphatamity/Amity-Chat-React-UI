import { ReactNode, CSSProperties } from 'react';
import { IconWrapper, ButtonActionItem, AnchorActionItem } from './styles';

export const ALLOWED_ELEMENTS = ['button', 'a'];

const ActionItemComponents = {
  a: AnchorActionItem,
  button: ButtonActionItem,
};

interface ISideMenuActionItem {
  element: 'button' | 'a';
  icon: ReactNode;
  children: ReactNode;
  active: boolean;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
}
const SideMenuActionItem = ({
  icon,
  children,
  active,
  className,
  onClick,
  element = 'a',
  style,
}: ISideMenuActionItem) => {
  const ActionItemContainer = ActionItemComponents[element];
  return (
    <ActionItemContainer onClick={onClick} className={className} active={active} style={style}>
      {icon && <IconWrapper active={active}>{icon}</IconWrapper>}
      <span className="actionItemChild">{children}</span>
    </ActionItemContainer>
  );
};

export default SideMenuActionItem;
