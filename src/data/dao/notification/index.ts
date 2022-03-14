import { AppContainer } from 'containers';
import { NotificationDao } from './notification.dao';
import { NotificationDaoImpl } from './notification.dao.impl';
import { NotificationDaoType } from './notification.types';

AppContainer.bind(NotificationDaoType).to(NotificationDaoImpl);

export { NotificationDaoType, NotificationDao, NotificationDaoImpl };
