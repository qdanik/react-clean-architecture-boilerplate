import 'reflect-metadata';
import {RootStore, MobxStore} from 'core/store';
import React from 'react';
import ReactDom from 'react-dom';
import {App} from 'ui';

const store: MobxStore = new RootStore();

function Root(): React.ReactElement {
  console.log(store);
  
  return <App />;
}

ReactDom.render(<Root />, document.getElementById('root'));
