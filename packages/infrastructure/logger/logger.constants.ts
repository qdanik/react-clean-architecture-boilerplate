import { ServiceIdentifier } from '../ioc';
import { Logger } from './logger';

export const LoggerType: ServiceIdentifier<Logger> = Symbol('Logger');
