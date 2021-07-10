import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'presentation/web/app.component';

function Root(): React.ReactElement {
  return <App />;
}

ReactDOM.render(<Root />, document.getElementById('root'));
