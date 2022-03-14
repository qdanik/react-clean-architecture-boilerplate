import { ServiceIdentifier } from 'containers/config';
import { NotificationDao } from './notification.dao';

export const NotificationDaoType: ServiceIdentifier<NotificationDao> = Symbol('NotificationDao');
