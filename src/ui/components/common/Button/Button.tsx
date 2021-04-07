import DotsLoader from 'assets/images/dotsLoader.svg';
import isFunction from 'lodash/isFunction';
import React, {useCallback} from 'react';
import {ButtonWrapper, LoaderWrapper} from './styles';
import {ButtonProps} from './types';

export function Button(props: ButtonProps): React.ReactElement {
  const {children, loading, disabled, onClick, ...rest} = props;

  const handleClick = useCallback(() => {
    if (disabled || loading || !isFunction(onClick)) {
      return;
    }

    onClick();
  }, [disabled, loading, onClick]);

  return (
    <ButtonWrapper {...rest} disabled={disabled} isLoading={loading} onClick={handleClick}>
      {loading && (
        <LoaderWrapper>
          <DotsLoader />
        </LoaderWrapper>
      )}
      {children}
    </ButtonWrapper>
  );
}
