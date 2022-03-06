import { Notification } from 'domain/notification';

export interface NotificationStore {
  list(): Notification[];
  save(entity: Notification): Notification;
  delete(entity: Notification): Notification;
}
