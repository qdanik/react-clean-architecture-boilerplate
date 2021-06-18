import { Formik, Form as FormikForm, Field } from 'formik';
import map from 'lodash/map';
import React from 'react';
import { getFormComponentByType } from './form.helpers';
import { FormProps } from './form.typings';

export function Form(props: FormProps<any>): React.ReactElement<FormProps<any>> {
  const { fields, children, ...rest } = props;

  return (
    <Formik validateOnMount {...rest}>
      <FormikForm>
        {map(fields, ({ fieldType, ...field }) => (
          <Field key={field.name} {...field} as={getFormComponentByType(fieldType)} />
        ))}
        {children}
      </FormikForm>
    </Formik>
  );
}
