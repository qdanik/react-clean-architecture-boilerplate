export enum ButtonVariants {
  Round = 'round',
  HalfRound = 'halfRound',
}

export interface ButtonWrapperProps {
  height?: string,
  width?: string,
  className?: string,
  variant?: ButtonVariants,
  onClick?: () => void,
  disabled?: boolean,
  isLoading?: boolean
}

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
  button = 'button'
}

export interface ButtonProps extends Omit<ButtonWrapperProps, 'isLoading'> {
  children: any,
  type?: ButtonType,
  loading?: boolean
}
