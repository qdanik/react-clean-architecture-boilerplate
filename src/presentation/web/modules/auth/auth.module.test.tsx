import React from 'react';
import { render } from '@testing-library/react';

import { Auth } from './auth.module';

describe('auth.module', () => {
  it('should match snapshot', () => {
    const { container } = render(<Auth presenter={null} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
