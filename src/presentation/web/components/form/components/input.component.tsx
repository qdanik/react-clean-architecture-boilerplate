import React from 'react';

import { Input as BaseInput, InputProps } from 'presentation/web/components/common';

import { FieldProps, FormComponentProps, withFormField } from '../hoc/with-form-field.hoc';

export const FormInput = withFormField(function FormInput(
  props: FormComponentProps<InputProps & FieldProps>,
): React.ReactElement {
  const { label, placeholder, onChange, field, ...rest } = props;
  const { state, api } = field;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    api?.onChange?.(event);
    onChange?.(event);
  };

  return (
    <BaseInput
      value={state?.value}
      onChange={handleChange}
      label={label}
      placeholder={placeholder}
      {...rest}
      inputRef={state?.ref}
    />
  );
});
