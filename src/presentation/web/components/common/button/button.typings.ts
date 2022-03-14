import React from 'react';

export enum ButtonVariants {
  Round = 'round',
  HalfRound = 'halfRound',
}

export type ButtonWrapperProps = Partial<{
  height: string;
  width: string;
  className: string;
  variant: ButtonVariants;
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}>;

export enum ButtonType {
  submit = 'submit',
  reset = 'reset',
  button = 'button',
}

export interface ButtonProps extends Omit<ButtonWrapperProps, 'isLoading'> {
  children: React.ReactNode;
  type?: ButtonType;
  loading?: boolean;
}
