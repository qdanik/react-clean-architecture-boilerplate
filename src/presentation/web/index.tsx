import 'reflect-metadata';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'presentation/web/app.component';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
