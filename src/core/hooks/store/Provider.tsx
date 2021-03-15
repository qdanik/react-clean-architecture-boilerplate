import {Store} from 'core/store';
import {Provider as MobxProvider} from 'mobx-react';
import React from 'react';

export function StoreProvider(props: {
  children: any;
  store: Store.IStore;
}): React.ReactElement {
  const {children, store} = props;

  return <MobxProvider {...store}>{children}</MobxProvider>;
}
