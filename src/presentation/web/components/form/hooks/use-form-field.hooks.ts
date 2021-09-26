import { RegisterOptions, SetValueConfig, useController, useFormContext } from 'react-hook-form';
import {
  FormFieldHook,
  FormFieldHookResult,
  FormFieldName,
  FormFieldSetValue,
} from '../form.typings';

export const useFormField: FormFieldHook = <TValue>(
  name: FormFieldName,
  options?: RegisterOptions,
): FormFieldHookResult<TValue> => {
  const { register, setValue, control, getValues } = useFormContext();
  const { onChange, onBlur, ref } = register(name, options);
  const { fieldState, formState } = useController({
    control,
    name,
  });
  const { error, isTouched } = fieldState;
  const { isSubmitting, isDirty } = formState;
  const value = getValues(name);
  const setFieldValue: FormFieldSetValue<TValue> = (
    value: TValue,
    options?: SetValueConfig,
  ): void => {
    setValue(name, value, options);
  };

  return [
    {
      error,
      isDirty,
      isSubmitting,
      name,
      ref,
      touched: isTouched,
      value,
    },
    {
      onBlur,
      onChange,
      setValue: setFieldValue,
    },
  ];
};
