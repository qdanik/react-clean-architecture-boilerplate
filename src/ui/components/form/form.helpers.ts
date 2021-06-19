import get from 'lodash/get';
import { FormFieldMapper } from './form.constants';
import { FormFieldType } from './form.typings';
import { Input } from '../common';

export function getFormComponentByType(type: FormFieldType): React.ReactElement {
  return (get(FormFieldMapper, type, Input) as unknown) as React.ReactElement;
}
