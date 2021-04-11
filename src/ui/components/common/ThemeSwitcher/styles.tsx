import styled from 'styled-components'
import { SwitcherBubbleProps, SwitcherPosition } from './types'

export const SwitcherWrapper = styled.button`
  position: relative;
`

export const SwitcherInner = styled.div`
  height: 28px;
  width: 60px;
  background: var(--gray5);
  border-radius: 15px;
`

export const SwitchBubble = styled.span<SwitcherBubbleProps>`
  position: absolute;
  top: 3px;
  bottom: 3px;
  left: ${({ position = SwitcherPosition.Left }) => position};
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--orange);
  border-radius: 24px;
  transition: 0.3s;
`
