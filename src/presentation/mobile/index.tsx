import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'presentation/web/app.component';

import 'reflect-metadata';

const container = document.getElementById('app');
const root = createRoot(container);

function Root(): React.ReactElement {
  return <App />;
}

root.render(<Root />);
