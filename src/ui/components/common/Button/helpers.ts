import {BorderRadiusMapper} from './constants';
import {ButtonVariants} from './types';

export function getBorderRadiusByVariant(variant: ButtonVariants): string {
  return variant in BorderRadiusMapper ? BorderRadiusMapper[variant] : '0';
}