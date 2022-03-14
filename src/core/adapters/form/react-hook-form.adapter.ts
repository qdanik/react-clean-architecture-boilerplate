import { FieldPath, Path, PathValue, UnpackNestedValue, UseFormReturn } from 'react-hook-form';
import { Injectable } from 'containers/config';
import { Form } from 'core/form';
import { FormApiErrors, FormValue } from 'core/form/form-api.typings';
import { PropertyPath } from 'typings';

@Injectable()
export class ReactHookFormAdapter<Values, Context extends UseFormReturn<Values>>
  implements Form<Values, Context>
{
  context: Context;

  setContext = (value: Context): void => {
    this.context = value;
  };

  getValue = <
    TFieldName extends PropertyPath<Values> = PropertyPath<Values>,
    TFieldValue extends FormValue<Values, TFieldName> = FormValue<Values, TFieldName>,
  >(
    name: TFieldName,
  ): TFieldValue => {
    return this.context.getValues(name as FieldPath<Values>) as TFieldValue;
  };

  getValues = (): Values => {
    return this.context.getValues() as Values;
  };

  setValue = <
    TFieldName extends PropertyPath<Values> = PropertyPath<Values>,
    TFieldValue extends FormValue<Values, TFieldName> = FormValue<Values, TFieldName>,
  >(
    name: TFieldName,
    value: TFieldValue,
  ): void => {
    this.context.setValue(
      name as Path<Values>,
      value as UnpackNestedValue<PathValue<Values, Path<Values>>>,
    );
  };

  getErrors(): FormApiErrors {
    return this.context.formState.errors as FormApiErrors;
  }

  resetForm(): void {
    this.context.reset();
  }
}
