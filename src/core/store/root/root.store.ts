import { DataStore } from '../data';
import { MobxStore } from '../store.typings';

export class RootStore implements MobxStore {
  data = new DataStore<any>();
}
