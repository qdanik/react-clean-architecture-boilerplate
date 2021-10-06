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

export type FormProps<TFieldValues> = {
  entity: BaseForm<TFieldValues>;
  children: FormChildren<TFieldValues>;
};

export type FormFieldName = FieldPath<Record<string, any>>;

export type FormFieldState<TValue> = {
  ref: RefCallBack;
  name: FormFieldName;
  value: TValue;
  error: DeepMap<DeepPartial<any>, FieldError>;
  touched: boolean;
  submitting: boolean;
  dirty: boolean;
};

export type FormFieldApi = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
};

export type FormFieldHookResult<TValue> = [FormFieldState<TValue>, FormFieldApi];

export type FormFieldHook = {
  <TValue extends any = string>(name: FormFieldName): FormFieldHookResult<TValue>;
  <TValue extends any = string>(
    name: FormFieldName,
    options: RegisterOptions,
  ): FormFieldHookResult<TValue>;
};
