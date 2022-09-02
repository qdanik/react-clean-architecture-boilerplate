import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';

import { NotificationDao } from './notification.dao';
import { NotificationDaoImpl } from './notification.dao.impl';

const NotificationDaoType: ServiceIdentifier<NotificationDao> = Symbol('NotificationDao');

AppContainer.bind(NotificationDaoType).to(NotificationDaoImpl);

export { NotificationDaoType, NotificationDaoImpl };
export type { NotificationDao };
