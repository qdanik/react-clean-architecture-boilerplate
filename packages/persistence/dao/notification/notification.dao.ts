import { Notification } from '@package/domain/notification';

export interface NotificationDao {
  getList(): Notification[];
  save(entity: Notification): Notification;
  remove(entity: Notification): void;
}
