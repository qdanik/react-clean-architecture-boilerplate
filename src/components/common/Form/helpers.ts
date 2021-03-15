import get from 'lodash/get';
import {FormFieldMapper} from './constants';
import {FormFieldType} from './types';
import {Input} from '../Input';

export function getFormComponentByType(type: FormFieldType): React.ReactElement {
  return get(FormFieldMapper, type, Input) as unknown as React.ReactElement
}