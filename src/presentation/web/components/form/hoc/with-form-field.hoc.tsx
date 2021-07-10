import React, { FunctionComponent, ReactElement } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { getDisplayName } from 'presentation/web/hoc/hoc.helpers';
import { FormFieldApi, FormFieldName, FormFieldState } from '../form.typings';
import { useFormField } from '../hooks/use-form-field.hooks';

export type FieldProps = {
  name: FormFieldName;
  options?: RegisterOptions;
};

export type FormFieldProps<TValue> = FormFieldApi<TValue> & FormFieldState<TValue>;

export function withFormField<TProps extends FieldProps, TValue>(
  WrappedComponent: FunctionComponent<TProps & FormFieldProps<TValue>>,
): FunctionComponent<TProps> {
  const WithFormField: FunctionComponent<TProps> = (props: TProps): ReactElement => {
    const { name, options } = props;
    const [fieldState, fieldApi] = useFormField<TValue>(name, options);

    return React.createElement(WrappedComponent, {
      ...props,
      ...fieldState,
      ...fieldApi,
    });
  };
  WithFormField.displayName = `withFormField(${getDisplayName(WrappedComponent)})`;

  return WithFormField;
}
