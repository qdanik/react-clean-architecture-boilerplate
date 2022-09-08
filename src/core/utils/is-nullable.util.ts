import isNill from 'lodash/isNil';

export function isNullable(value: unknown): boolean {
  return isNill(value) || value === 'null';
}
