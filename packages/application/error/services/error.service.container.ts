import { ioc, ServiceIdentifier } from '@package/infrastructure/ioc';

import { ErrorService } from './error.service';
import { ErrorServiceImpl } from './error.service.impl';

const ErrorServiceType: ServiceIdentifier<ErrorService> = Symbol('ErrorService');

ioc.bind(ErrorServiceType).to(ErrorServiceImpl);

export { ErrorServiceImpl, ErrorServiceType };
export type { ErrorService };
