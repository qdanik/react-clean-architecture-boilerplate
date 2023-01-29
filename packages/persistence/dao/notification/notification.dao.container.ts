import { ioc, ServiceIdentifier } from '@package/infrastructure/ioc';

import { NotificationDao } from './notification.dao';
import { NotificationDaoImpl } from './notification.dao.impl';

const NotificationDaoType: ServiceIdentifier<NotificationDao> = Symbol('NotificationDao');

ioc.bind(NotificationDaoType).to(NotificationDaoImpl);

export { NotificationDaoType, NotificationDaoImpl };
export type { NotificationDao };
