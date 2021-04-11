import React from 'react'
import { Wrapper, Label, StyledInput, LabelWrapper } from './styles'

type InputProps = {
  label?: string,
  value: string | number,
  placeholder?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps): React.ReactElement<InputProps> => {
  const { label, value, onChange, placeholder, ...rest } = props

  return (
    <Wrapper>
      <LabelWrapper>
        <Label>{label}</Label>
        <StyledInput onChange={onChange} value={value} placeholder={placeholder} {...rest} />
      </LabelWrapper>
    </Wrapper>
  )
}
