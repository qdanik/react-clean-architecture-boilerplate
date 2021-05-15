import 'reflect-metadata';
import { RootStore, MobxStore } from '@app/core/store';
import { App } from '@app/ui/app.component';
import React from 'react';
import ReactDom from 'react-dom';

const store: MobxStore = new RootStore();

function Root(): React.ReactElement {
  // eslint-disable-next-line no-console
  console.log(store);

  return <App />;
}

ReactDom.render(<Root />, document.getElementById('root'));
