import { ReactNode } from 'react';
import {
  ChangeHandler,
  DeepMap,
  DeepPartial,
  FieldError,
  FieldPath,
  RefCallBack,
  RegisterOptions,
  SetValueConfig,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';

type FormChildren<TFieldValues> =
  | ReactNode
  | ReactNode[]
  | { (formApi: UseFormReturn<TFieldValues>): ReactNode | ReactNode[] };

type CustomFormProps<TFieldValues> = {
  onSubmit: <V, R>(values: V) => Promise<R>;
  children: FormChildren<TFieldValues>;
};

export type FormProps<TFieldValues> = UseFormProps<TFieldValues> & CustomFormProps<TFieldValues>;

export type FormFieldName = FieldPath<Record<string, any>>;

export type FormFieldState<TValue> = {
  ref: RefCallBack;
  name: FormFieldName;
  value: TValue;
  error: DeepMap<DeepPartial<any>, FieldError>;
  touched: boolean;
  isSubmitting: boolean;
  isDirty: boolean;
};

export type FormFieldSetValue<TValue> = {
  (value: TValue): void;
  (value: TValue, options: SetValueConfig): void;
};

export type FormFieldApi<TValue> = {
  setValue: FormFieldSetValue<TValue>;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
};

export type FormFieldHookResult<TValue> = [FormFieldState<TValue>, FormFieldApi<TValue>];

export type FormFieldHook = {
  <TValue extends any = string>(name: FormFieldName): FormFieldHookResult<TValue>;
  <TValue extends any = string>(
    name: FormFieldName,
    options: RegisterOptions,
  ): FormFieldHookResult<TValue>;
};
