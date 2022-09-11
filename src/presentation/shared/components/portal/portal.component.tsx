import { ReactPortal, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './portal.types';

export const Portal = ({ target, children }: PortalProps): ReactPortal => {
  const [element, setElement] = useState(
    (target && target.current) || document.getElementById('portals'),
  );

  useLayoutEffect(() => {
    if (target) {
      setElement(target.current);
    }
  }, [target]);

  return createPortal(children, element);
};
