import React, { FunctionComponent, ReactElement } from 'react';
import { RegisterOptions } from 'react-hook-form';

import { getDisplayName } from 'presentation/shared';

import { FormFieldApi, FormFieldName, FormFieldState } from '../form.types';
import { useFormField } from '../hooks/use-form-field.hooks';

export type FieldProps = {
  name: FormFieldName;
  options?: RegisterOptions;
};

type FormFieldProps<TValue = string> = {
  field: {
    api: FormFieldApi;
    state: FormFieldState<TValue>;
  };
};

export type FormComponentProps<Props extends FieldProps, TValue = string> = Partial<Props> &
  FormFieldProps<TValue>;

type GetComponentProps<TProps> = TProps extends FormComponentProps<infer Props>
  ? Partial<Props>
  : TProps;

export function withFormField<WrappedProps extends FormComponentProps<FieldProps>, TValue>(
  WrappedComponent: FunctionComponent<WrappedProps>,
): FunctionComponent<GetComponentProps<WrappedProps>> {
  function WithFormField(props: GetComponentProps<WrappedProps>): ReactElement {
    const { name, options } = props;
    const [fieldState, fieldApi] = useFormField<TValue>(name, options);
    const elementProps = {
      ...props,
      field: {
        api: fieldApi,
        state: fieldState,
      },
    } as WrappedProps;

    return React.createElement(WrappedComponent, elementProps);
  }
  WithFormField.displayName = `withFormField(${getDisplayName(WrappedComponent)})`;

  return WithFormField;
}
