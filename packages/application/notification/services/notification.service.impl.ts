import {
  DEFAULT_NOTIFICATION_DELAY,
  Notification,
  NotificationType,
} from '@package/domain/notification';
import { Inject, Injectable } from '@package/infrastructure/ioc';
import { NotificationDao, NotificationDaoType } from '@package/persistence/dao/notification';

import { NotificationService } from './notification.service';

@Injectable()
export class NotificationServiceImpl implements NotificationService {
  constructor(@Inject(NotificationDaoType) private readonly notifications: NotificationDao) {}

  #closeWithDelay(entity: Notification, duration: number = DEFAULT_NOTIFICATION_DELAY) {
    setTimeout(() => {
      this.close(entity);
    }, duration);
  }

  private _add(entity: Notification, type: NotificationType): Notification {
    const notification = entity.setType(type);

    this.notifications.save(notification);
    this.#closeWithDelay(notification);

    return notification;
  }

  success(entity: Notification): Notification {
    return this._add(entity, NotificationType.Success);
  }

  error(entity: Notification): Notification {
    return this._add(entity, NotificationType.Error);
  }

  warn(entity: Notification): Notification {
    return this._add(entity, NotificationType.Warn);
  }

  info(entity: Notification): Notification {
    return this._add(entity, NotificationType.Info);
  }

  close(entity: Notification): void {
    this.notifications.remove(entity);
  }
}
