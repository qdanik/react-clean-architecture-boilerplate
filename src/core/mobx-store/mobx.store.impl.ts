import { MobxStore } from './mobx.store';
import { NotificationStoreImpl } from './notification-store';

export class MobxStoreImpl implements MobxStore {
  notifications = new NotificationStoreImpl();
}
