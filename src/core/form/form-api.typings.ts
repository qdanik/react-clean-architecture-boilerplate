import { PropertyPath, PropertyPathValue, GetNestedValue } from 'typings';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FormApiErrors = Record<string, any>;

export type FormValue<
  ReturnValue,
  FieldName extends PropertyPath<ReturnValue> = PropertyPath<ReturnValue>,
> = GetNestedValue<PropertyPathValue<ReturnValue, FieldName>>;
