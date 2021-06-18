import React from 'react';
import { Wrapper, Label, StyledInput, LabelWrapper } from './input.styles';
import { InputProps } from './input.typings';

export const Input = (props: InputProps): React.ReactElement<InputProps> => {
  const { label, value, onChange, placeholder, ...rest } = props;

  return (
    <Wrapper>
      <LabelWrapper>
        <Label>{label}</Label>
        <StyledInput onChange={onChange} value={value} placeholder={placeholder} {...rest} />
      </LabelWrapper>
    </Wrapper>
  );
};
