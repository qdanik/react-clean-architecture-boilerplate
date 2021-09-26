import { BorderRadiusMapper } from './button.constants';
import { ButtonVariants } from './button.typings';

export function getBorderRadiusByVariant(variant: ButtonVariants): string {
  return variant in BorderRadiusMapper ? BorderRadiusMapper[variant] : '0';
}
