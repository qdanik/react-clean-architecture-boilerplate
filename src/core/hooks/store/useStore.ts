import {Store} from 'core/store';
import {MobXProviderContext} from 'mobx-react';
import {useContext} from 'react';

export function useStore(): Store.IStore {
  return useContext(MobXProviderContext) as Store.IStore;
}
