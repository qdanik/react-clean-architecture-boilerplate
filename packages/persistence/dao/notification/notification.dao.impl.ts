import { Notification } from '@package/domain/notification';
import { Inject, Injectable } from '@package/infrastructure/ioc';
import { MobxStore, MobxStoreType } from '@package/infrastructure/mobx-store';

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
