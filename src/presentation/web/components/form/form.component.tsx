import React, { ReactElement } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormProps } from './form.typings';

export function Form<TFieldValues>(
  props: FormProps<TFieldValues>,
): ReactElement<FormProps<TFieldValues>> {
  const { children, onSubmit } = props;
  const form = useForm<TFieldValues>();
  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children instanceof Function ? children(form) : children}
      </form>
    </FormProvider>
  );
}
