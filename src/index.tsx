import 'reflect-metadata';
import {RootStore, MobxStore} from 'core/store';
import React from 'react';
import ReactDom from 'react-dom';
import {StoreProvider} from 'ui/hooks/store';

const store: MobxStore = new RootStore();

function Root(): React.ReactElement {
  return (
    <StoreProvider store={store}>
      <h1>Danik</h1>
    </StoreProvider>
  );
}

ReactDom.render(<Root />, document.getElementById('root'));
