import { FieldPath, FieldPathValue, UseFormReturn } from 'react-hook-form';

import { Form } from '../../form';
import { FormApiErrors } from '../../form/form-api.types';
import { Injectable } from '../../ioc';

@Injectable()
export class ReactHookFormAdapter<Values extends object, Context extends UseFormReturn<Values>>
  implements Form<Values, Context>
{
  context: Context;

  setContext = (value: Context): void => {
    this.context = value;
  };

  getValue = <
    TFieldName extends FieldPath<Values> = FieldPath<Values>,
    TFieldValue extends FieldPathValue<Values, TFieldName> = FieldPathValue<Values, TFieldName>,
  >(
    name: TFieldName,
  ): TFieldValue => {
    return this.context.getValues(name as unknown as FieldPath<Values>) as TFieldValue;
  };

  getValues = (): Values => {
    return this.context.getValues();
  };

  setValue = <
    TFieldName extends FieldPath<Values> = FieldPath<Values>,
    TFieldValue extends FieldPathValue<Values, TFieldName> = FieldPathValue<Values, TFieldName>,
  >(
    name: TFieldName,
    value: TFieldValue,
  ): void => {
    this.context.setValue(name, value);
  };

  getErrors(): FormApiErrors {
    return this.context.formState.errors as FormApiErrors;
  }

  resetForm(): void {
    this.context.reset();
  }
}
