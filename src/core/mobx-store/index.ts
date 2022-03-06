import { ServiceIdentifier } from 'containers/config';
import { MobxStore } from './mobx.store';
import { MobxStoreImpl } from './mobx.store.impl';

const MobxStoreType: ServiceIdentifier<MobxStore> = Symbol('MobxStore');

export type { MobxStore };
export { MobxStoreImpl, MobxStoreType };
