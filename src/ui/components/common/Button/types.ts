export enum ButtonVariants {
  Round = 'round',
  HalfRound = 'halfRound',
}

export interface ButtonWrapperProps {
  height?: string
  width?: string
  className?: string
  variant?: ButtonVariants
  onClick?: () => void
  disabled?: boolean
  isLoading?: boolean
}

export interface ButtonProps extends Omit<ButtonWrapperProps, 'isLoading'> {
  children: any
  type?: 'submit' | 'reset' | 'button'
  loading?: boolean
}
