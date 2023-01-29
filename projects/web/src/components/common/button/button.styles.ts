import styled, { css } from 'styled-components';

import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from './button.constants';
import { getBorderRadiusByVariant } from './button.helpers';
import { ButtonVariants, ButtonWrapperProps } from './button.types';

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: ${({ height = DEFAULT_HEIGHT }) => height};
  width: ${({ width = DEFAULT_WIDTH }) => width};
  padding: 4px 5px 0;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: ${({ variant = ButtonVariants.Round }) => getBorderRadiusByVariant(variant)};
  transition: box-shadow 0.2s;
  overflow: hidden;

  ${({ disabled, isLoading }) =>
    !disabled &&
    !isLoading &&
    css`
      &:hover {
        box-shadow: lightgray;
      }
    `}

  ${({ disabled }) =>
    disabled
      ? css`
          color: gray;
          background-color: lightgray;
        `
      : css`
          color: white;
          background-color: orange;
        `}
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
`;
