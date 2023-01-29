import React from 'react';

import { Label, StyledInput, Wrapper } from './input.styles';
import { InputProps } from './input.types';

export function Input(props: InputProps): React.ReactElement<InputProps> {
  const { label, value, onChange, placeholder, inputRef, ...rest } = props;

  return (
    <Wrapper>
      <Label>{label}</Label>
      <StyledInput
        onChange={onChange}
        value={value || ''}
        placeholder={placeholder}
        ref={inputRef}
        {...rest}
      />
    </Wrapper>
  );
}
