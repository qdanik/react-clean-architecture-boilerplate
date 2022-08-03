import { Inject, Injectable } from 'containers/config';
import { NotificationDao, NotificationDaoType } from 'data/dao/notification';

import { Notification } from '../entities/notification.entity';
import { DEFAULT_NOTIFICATION_DELAY, NotificationType } from '../notification.typings';
import { NotificationService } from './notification.service';

@Injectable()
export class NotificationServiceImpl implements NotificationService {
  constructor(@Inject(NotificationDaoType) private readonly notifications: NotificationDao) {}

  #closeWithDelay(entity: Notification, duration: number = DEFAULT_NOTIFICATION_DELAY) {
    setTimeout(() => {
      this.close(entity);
    }, duration);
  }

  #add(entity: Notification, type: NotificationType): Notification {
    const notification = entity.setType(type);

    this.notifications.save(notification);
    this.#closeWithDelay(notification);

    return notification;
  }

  success(entity: Notification): Notification {
    return this.#add(entity, NotificationType.Success);
  }

  error(entity: Notification): Notification {
    return this.#add(entity, NotificationType.Error);
  }

  warn(entity: Notification): Notification {
    return this.#add(entity, NotificationType.Warn);
  }

  info(entity: Notification): Notification {
    return this.#add(entity, NotificationType.Info);
  }

  close(entity: Notification): void {
    this.notifications.remove(entity);
  }
}
