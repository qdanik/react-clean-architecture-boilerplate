import { ServiceIdentifier } from 'containers/config';

import { Logger } from './logger';

export const LoggerType: ServiceIdentifier<Logger> = Symbol('Logger');
