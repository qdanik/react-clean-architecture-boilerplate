import { Injectable, Inject } from 'containers/config';
import { NotificationServiceType, NotificationService, Notification } from 'domain/notification';
import { ErrorService } from './error.service';
import { Error } from '../entities/error.entity';
import { ErrorResponse } from '../error.typings';

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
