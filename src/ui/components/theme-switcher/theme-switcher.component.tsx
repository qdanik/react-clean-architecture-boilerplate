import isFunction from 'lodash/isFunction';
import React, { useCallback, useMemo } from 'react';
import { getSwitcherIcon, getSwitcherPosition } from './theme-switcher.helpers';
import { SwitcherInner, SwitchBubble, SwitcherWrapper } from './theme-switcher.styles';
import { ThemeSwitcherProps } from './theme-switcher.typings';

export function ThemeSwitcher(props: ThemeSwitcherProps): React.ReactElement<ThemeSwitcherProps> {
  const { value, onChange } = props;

  const [position, Icon] = useMemo(() => [getSwitcherPosition(value), getSwitcherIcon(value)], [
    value,
  ]);
  const onClick = useCallback(() => {
    if (isFunction(onChange)) {
      onChange();
    }
  }, [onChange]);

  return (
    <SwitcherWrapper onClick={onClick}>
      <SwitcherInner />
      <SwitchBubble position={position}>
        <Icon />
      </SwitchBubble>
    </SwitcherWrapper>
  );
}
