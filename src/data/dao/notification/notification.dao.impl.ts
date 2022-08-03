import { Inject, Injectable } from 'containers/config';
import { MobxStore, MobxStoreType } from 'core/mobx-store';
import { Notification } from 'domain/notification';

import { NotificationDao } from './notification.dao';

@Injectable()
export class NotificationDaoImpl implements NotificationDao {
  constructor(@Inject(MobxStoreType) private readonly _store: MobxStore) {}

  getList(): Notification[] {
    return this._store.notifications.list();
  }

  save(entity: Notification): Notification {
    return this._store.notifications.save(entity);
  }

  remove(entity: Notification): Notification {
    return this._store.notifications.delete(entity);
  }
}
