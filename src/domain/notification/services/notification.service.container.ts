import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';

import { NotificationService } from './notification.service';
import { NotificationServiceImpl } from './notification.service.impl';

const NotificationServiceType: ServiceIdentifier<NotificationService> =
  Symbol('NotificationServiceType');

AppContainer.bind(NotificationServiceType).to(NotificationServiceImpl);

export { NotificationServiceType, NotificationServiceImpl };
export type { NotificationService };
