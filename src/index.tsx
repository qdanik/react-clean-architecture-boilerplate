import 'reflect-metadata';
import React from 'react';
import ReactDom from 'react-dom';
import { RootStore, MobxStore } from '@app/core/store';
import { App } from '@app/ui/app.component';

const store: MobxStore = new RootStore();

function Root(): React.ReactElement {
  // eslint-disable-next-line no-console
  console.log(store);

  return <App />;
}

ReactDom.render(<Root />, document.getElementById('root'));
