import React, { useCallback } from 'react';
import isFunction from 'lodash/isFunction';

import { ButtonWrapper, LoaderWrapper } from './button.styles';
import { ButtonProps } from './button.types';

export function Button(props: ButtonProps): React.ReactElement {
  const { children, loading, disabled, onClick, ...rest } = props;

  const handleClick = useCallback(() => {
    if (disabled || loading || !isFunction(onClick)) {
      return;
    }

    onClick();
  }, [disabled, loading, onClick]);

  return (
    <ButtonWrapper {...rest} disabled={disabled} isLoading={loading} onClick={handleClick}>
      {loading && <LoaderWrapper>{/* <DotsLoader /> */}</LoaderWrapper>}
      {children}
    </ButtonWrapper>
  );
}
