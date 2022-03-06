import { Notification } from 'domain/notification';

export interface NotificationDao {
  getList(): Notification[];
  save(entity: Notification): Notification;
  remove(entity: Notification): void;
}
