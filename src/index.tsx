import 'reflect-metadata';
import {DependencyInjectorContext} from 'core/hooks/di';
import {StoreProvider} from 'core/hooks/store';
import {Di} from 'core/shared';
import {Store} from 'core/store';
import {App} from 'presentation';
import React from 'react';
import {render} from 'react-dom';

const store = Di.get<Store.IStore>(Store.Type);

function Root(): React.ReactElement {
  return (
    <StoreProvider store={store}>
      <DependencyInjectorContext.Provider value={Di}>
        <App />
      </DependencyInjectorContext.Provider>
    </StoreProvider>
  );
}

render(<Root />, document.getElementById('root'));
