import { ServiceIdentifier } from 'containers/config';
import { PropertyPath } from 'typings';
import { FormApiErrors, FormValue } from './form-api.typings';

export const FormType: ServiceIdentifier<Form> = Symbol('FormType');

export interface Form<Values extends any = any, Context extends any = any> {
  setContext(value: Context): void;

  getValue<
    TFieldName extends PropertyPath<Values> = PropertyPath<Values>,
    TFieldValue extends FormValue<Values, TFieldName> = FormValue<Values, TFieldName>,
  >(
    name: TFieldName,
  ): TFieldValue;
  setValue<
    TFieldName extends PropertyPath<Values> = PropertyPath<Values>,
    TFieldValue extends FormValue<Values, TFieldName> = FormValue<Values, TFieldName>,
  >(
    name: TFieldName,
    value: TFieldValue,
  ): void;

  getValues(): Values;

  getErrors(): FormApiErrors;

  resetForm(): void;
}
