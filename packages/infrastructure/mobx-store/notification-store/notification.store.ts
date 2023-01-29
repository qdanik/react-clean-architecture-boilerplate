import { Notification } from '@package/domain/notification';

export interface NotificationStore {
  list(): Notification[];
  save(entity: Notification): Notification;
  delete(entity: Notification): Notification;
}
