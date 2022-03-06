import { Inject, Injectable } from 'containers/config';
import { NotificationDao, NotificationDaoType } from 'data/dao/notification';
import { NotificationService } from './notification.service';
import { Notification } from '../entities/notification.entity';
import { DEFAULT_NOTIFICATION_DELAY, NotificationType } from '../notification.typings';

@Injectable()
export class NotificationServiceImpl implements NotificationService {
  constructor(@Inject(NotificationDaoType) private readonly _notifications: NotificationDao) {}

  private _closeWithDelay(entity: Notification, duration: number = DEFAULT_NOTIFICATION_DELAY) {
    setTimeout(this.close, duration, entity);
  }

  private _add(entity: Notification, type: NotificationType): Notification {
    const notification = entity.setType(type);

    this._notifications.save(notification);
    this._closeWithDelay(notification);

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
    this._notifications.remove(entity);
  }
}
