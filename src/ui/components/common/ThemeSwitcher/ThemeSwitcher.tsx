import isFunction from 'lodash/isFunction';
import React, { useCallback, useMemo } from 'react';
import { getSwitcherIcon, getSwitcherPosition } from './helpers';
import { SwitcherInner, SwitchBubble, SwitcherWrapper } from './styles';
import { ThemeSwitcherProps } from './types';

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
