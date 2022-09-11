import { ReactNode, RefObject } from 'react';

export type PortalProps = {
  target?: RefObject<HTMLElement>;
  children: ReactNode;
};
