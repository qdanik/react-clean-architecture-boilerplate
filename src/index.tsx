import 'reflect-metadata';
import React from 'react';
import ReactDom from 'react-dom';
import { App } from 'ui/app.component';

function Root(): React.ReactElement {
  return <App />;
}

ReactDom.render(<Root />, document.getElementById('root'));
