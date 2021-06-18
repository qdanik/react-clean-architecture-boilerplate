import React from 'react';
import { BoxWrapper } from './box.styles';
import { BoxProps } from './box.typings';

export const Box = (props: BoxProps): React.ReactElement<BoxProps> => {
  const { className, children } = props;

  return <BoxWrapper className={className}>{children}</BoxWrapper>;
};
