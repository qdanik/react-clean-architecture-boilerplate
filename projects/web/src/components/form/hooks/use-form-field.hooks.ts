import { useController, useFormContext } from 'react-hook-form';

import { FormFieldHook, FormFieldHookResult, FormFieldName } from '../form.types';

export const useFormField: FormFieldHook = <TValue>(
  name: FormFieldName,
): FormFieldHookResult<TValue> => {
  const { control } = useFormContext();
  const { fieldState, formState, field } = useController({
    control,
    name,
  });
  const { error, isTouched } = fieldState;
  const { isSubmitting, isDirty } = formState;
  const { ref, value, onBlur, onChange } = field;

  return [
    {
      dirty: isDirty,
      error,
      name,
      ref,
      submitting: isSubmitting,
      touched: isTouched,
      value,
    },
    {
      onBlur,
      onChange,
    },
  ];
};
