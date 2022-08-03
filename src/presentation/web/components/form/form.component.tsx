import React, { ReactElement } from 'react';
import { DefaultValues, FormProvider, useForm } from 'react-hook-form';
import compose from 'lodash/fp/compose';

import { useDidMount } from 'presentation/web/hooks';

import { FormProps } from './form.typings';

export function Form<TFieldValues, TFieldResponse>(
  props: FormProps<TFieldValues, TFieldResponse>,
): ReactElement<FormProps<TFieldValues, TFieldResponse>> {
  const { children, entity } = props;
  const form = useForm<TFieldValues>({
    defaultValues: entity.getInitialValues() as DefaultValues<TFieldValues>,
  });
  const { handleSubmit } = form;

  const onSubmit = () => {
    handleSubmit(data => {
      entity.handleSubmit(data);
    });
  };

  useDidMount(() => {
    entity.api.setContext(form);
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        onChange={() => compose(entity.handleChange, entity.api.getValues)()}
      >
        {children instanceof Function ? children(form) : children}
      </form>
    </FormProvider>
  );
}
