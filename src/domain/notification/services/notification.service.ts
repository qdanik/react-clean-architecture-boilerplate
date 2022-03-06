import { Notification } from '../entities';

export interface NotificationService {
  success(entity: Notification): Notification;
  error(entity: Notification): Notification;
  warn(entity: Notification): Notification;
  info(entity: Notification): Notification;
  close(entity: Notification): void;
}
