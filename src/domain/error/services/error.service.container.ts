import { AppContainer } from 'containers';
import { ServiceIdentifier } from 'containers/config';

import { ErrorService } from './error.service';
import { ErrorServiceImpl } from './error.service.impl';

const ErrorServiceType: ServiceIdentifier<ErrorService> = Symbol('ErrorService');

AppContainer.bind(ErrorServiceType).to(ErrorServiceImpl);

export { ErrorServiceImpl, ErrorServiceType };
export type { ErrorService };
