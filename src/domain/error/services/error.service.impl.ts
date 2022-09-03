import { Inject, Injectable } from 'containers/config';
import { Notification, NotificationService, NotificationServiceType } from 'domain/notification';

import { Error } from '../entities/error.entity';
import { ErrorResponse } from '../error.types';
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
