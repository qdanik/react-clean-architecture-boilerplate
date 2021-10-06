import compose from 'lodash/fp/compose';
import React, { ReactElement, useEffect } from 'react';
import {
  DeepPartial,
  FormProvider,
  SubmitHandler,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';
import { FormProps } from './form.typings';

export function Form<TFieldValues>(
  props: FormProps<TFieldValues>,
): ReactElement<FormProps<TFieldValues>> {
  const { children, entity } = props;
  const form = useForm<TFieldValues>({
    defaultValues: entity.getInitialValues() as UnpackNestedValue<DeepPartial<TFieldValues>>,
  });
  const { handleSubmit } = form;

  useEffect(() => {
    entity.api.setContext(form);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(entity.handleSubmit as SubmitHandler<TFieldValues>)}
        onChange={() => compose(entity.handleChange, entity.api.getValues)()}
      >
        {children instanceof Function ? children(form) : children}
      </form>
    </FormProvider>
  );
}
