import { PropertyPath, PropertyPathValue, GetNestedValue } from 'typings';

export type FormApiErrors = Record<string, string>;

export type FormValue<
  ReturnValue,
  FieldName extends PropertyPath<ReturnValue> = PropertyPath<ReturnValue>,
> = GetNestedValue<PropertyPathValue<ReturnValue, FieldName>>;
