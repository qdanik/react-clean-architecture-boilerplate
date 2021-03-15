import {Store} from 'core/store';
import {Di as DependencyInjector} from './di';

DependencyInjector
  .setConstantService(Store.Type, new Store.RootStore())

export const Di = DependencyInjector.getContainer();
