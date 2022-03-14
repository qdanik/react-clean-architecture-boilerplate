import compose from 'lodash/fp/compose';
import React, { ReactElement, useEffect } from 'react';
import { DeepPartial, FormProvider, UnpackNestedValue, useForm } from 'react-hook-form';
import { FormProps } from './form.typings';

export function Form<TFieldValues, TFieldResponse>(
  props: FormProps<TFieldValues, TFieldResponse>,
): ReactElement<FormProps<TFieldValues, TFieldResponse>> {
  const { children, entity } = props;
  const form = useForm<TFieldValues>({
    defaultValues: entity.getInitialValues() as UnpackNestedValue<DeepPartial<TFieldValues>>,
  });
  const { handleSubmit } = form;

  const onSubmit = () => {
    handleSubmit(data => {
      entity.handleSubmit(data as TFieldValues);
    });
  };

  useEffect(() => {
    entity.api.setContext(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
