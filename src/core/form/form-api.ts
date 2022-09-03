import { FieldPath, FieldPathValue } from 'react-hook-form';

import { ServiceIdentifier } from 'containers/config';

import { FormApiErrors } from './form-api.types';

export const FormType: ServiceIdentifier<Form> = Symbol('FormType');

export interface Form<Values = object, Context = unknown> {
  setContext(value: Context): void;

  getValue<
    TFieldName extends FieldPath<Values> = FieldPath<Values>,
    TFieldValue extends FieldPathValue<Values, TFieldName> = FieldPathValue<Values, TFieldName>,
  >(
    name: TFieldName,
  ): TFieldValue;

  setValue<
    TFieldName extends FieldPath<Values> = FieldPath<Values>,
    TFieldValue extends FieldPathValue<Values, TFieldName> = FieldPathValue<Values, TFieldName>,
  >(
    name: TFieldName,
    value: TFieldValue,
  ): void;

  getValues(): Values;

  getErrors(): FormApiErrors;

  resetForm(): void;
}
