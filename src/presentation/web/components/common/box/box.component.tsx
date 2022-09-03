import React from 'react';

import { BoxWrapper } from './box.styles';
import { BoxProps } from './box.types';

export function Box({ className, children }: BoxProps): React.ReactElement<BoxProps> {
  return <BoxWrapper className={className}>{children}</BoxWrapper>;
}
