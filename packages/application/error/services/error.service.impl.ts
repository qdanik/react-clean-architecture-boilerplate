import { Error, ErrorResponse } from '@package/domain/error';
import { Notification } from '@package/domain/notification';
import { Inject, Injectable } from '@package/infrastructure/ioc';

import { NotificationService, NotificationServiceType } from '../../notification';
import { ErrorService } from './error.service';

@Injectable()
export class ErrorServiceImpl implements ErrorService {
  constructor(
    @Inject(NotificationServiceType) private readonly _notificationService: NotificationService,
  ) {}

  handle = (error: Error): Promise<ErrorResponse> => {
    if (error?.isUnauthorized()) {
      // is unauth
    }

    this._notificationService.error(new Notification(error?.message));

    return Promise.reject(error);
  };
}
