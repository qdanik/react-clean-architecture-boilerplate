import { ReactNode } from 'react';
import {
  DeepMap,
  DeepPartial,
  FieldError,
  FieldPath,
  RefCallBack,
  RegisterOptions,
  UseFormReturn,
} from 'react-hook-form';

import { BaseForm } from 'presentation/forms/base.form';

type FormChildren<TFieldValues> =
  | ReactNode
  | ReactNode[]
  | { (formApi: UseFormReturn<TFieldValues>): ReactNode | ReactNode[] };

export type FormProps<TFieldValues, TFieldResponse> = {
  entity: BaseForm<TFieldValues, TFieldResponse>;
  children: FormChildren<TFieldValues>;
};

export type FormFieldName = FieldPath<Record<string, unknown>>;

export type FormFieldState<TValue = string> = {
  ref: RefCallBack;
  name: FormFieldName;
  value: TValue;
  error: DeepMap<DeepPartial<unknown>, FieldError>;
  touched: boolean;
  submitting: boolean;
  dirty: boolean;
};

export type FormFieldApi = {
  onChange: (...event: unknown[]) => void;
  onBlur: () => void;
};

export type FormFieldHookResult<TValue> = [FormFieldState<TValue>, FormFieldApi];

export type FormFieldHook = {
  <TValue = string>(name: FormFieldName): FormFieldHookResult<TValue>;
  <TValue = string>(name: FormFieldName, options: RegisterOptions): FormFieldHookResult<TValue>;
};
